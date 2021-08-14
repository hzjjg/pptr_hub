import { v4 as uuidv4 } from 'uuid'

class PendingReqs {

    private reqs = new Map()

    complete(reqId: string, data: any) {
        if (this.reqs.has(reqId)) {
            //返回数据与清空超时计时器
            this.reqs.get(reqId)?.callback?.(data)
            clearTimeout(this.reqs.get(reqId))
            this.reqs.delete(reqId)
        }
    }

    add(reqId: any, callback: (...args: any) => void, failCallback: (...args: any) => void, timeout: number) {
        //设置超时计时器
        const timmer = setTimeout(() => {
            failCallback({ reason: 'timeout' })
            this.reqs.delete(reqId)
        }, timeout);

        !this.reqs.has(reqId) && this.reqs.set(reqId, {
            callback,
            timmer
        })
    }

}

export default function ToRequest() {
    const pendingReqs = new PendingReqs()

    return {
        /**
         * 将监听到的返回数据传入此方法，以激活响应。
         * @param respId 发送请求时的 reqId，作为respId返回来。
         * @param data 返回的数据
         */
        toResp(respId: string, data: any) {
            pendingReqs.complete(respId, data)
        },
        /**
         * 发送请求
         * 将ipc通信转换为请求->响应模式
         * @param sendFun 发送数据的方法，第一个参数应该设置为需要发送给服务端的数据
         */
        toReq(sendFun: (payload: { reqId: string, url: string, params: any }) => void) {
            return function request(url: string, params?: any, options?: { timeout?: number }): Promise<any> {
                const reqId = uuidv4()
                return new Promise((resolve, reject) => {
                    sendFun({ reqId, url, params })
                    //收到响应时候会调用resolve
                    pendingReqs.add(reqId, resolve, reject, options?.timeout || 30000)
                })
            }
        }
    }
}