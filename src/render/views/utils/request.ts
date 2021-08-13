import uuid from "./uuid"

class RequestTasks {

    private static instance: RequestTasks

    static getInstance() {
        return this.instance = this.instance || new RequestTasks()
    }

    private tasks = new Map()

    private constructor() {
        window.api.receive('response', (respId, data) => {
            //收到对应
            if (this.tasks.has(respId)) {
                //返回数据与清空超时计时器
                this.tasks.get(respId)?.callback?.(data)
                clearTimeout(this.tasks.get(respId))
                this.tasks.delete(respId)
            }
        })
    }

    addTask(respId: any, callback: (...args: any) => void, failCallback: (...args: any) => void, timeout: number) {
        //设置超时计时器
        const timmer = setTimeout(() => {
            failCallback({ reason: 'timeout' })
            this.tasks.delete(respId)
        }, timeout);

        !this.tasks.has(respId) && this.tasks.set(respId, {
            callback,
            timmer
        })
    }

}

/**
 * 发送请求
 * 将ipc通信转换为请求->响应模式
 */
export function request<T>(url: string, params?: any, options?: { timeout?: number }): Promise<T> {
    const reqId = uuid()
    return new Promise((resolve, reject) => {
        window.api.send('request', reqId, url, params)
        //收到响应时候会调用resolve
        RequestTasks.getInstance().addTask(reqId, resolve, reject, options?.timeout || 30000)
    })
}