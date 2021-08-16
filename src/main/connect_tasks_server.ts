import { fork } from 'child_process'
import path from 'path'
import CpRequest from "./cp_request";

/**
 * 连接主进程与子进程
 * 连接完成后可以使用cpRequest发送请求
 */
export default function connectTasksServer() {

    // const child = fork(path.join(__dirname, '../../task_demo/index.js'))
    const child = fork('/Users/hzj/www/web_test/main_ipc.js')
    CpRequest.getInstance(child)

    child.on('exit', (code, signal) => {
        console.log(code, signal);
    })

    return new Promise((resolve) => {
        const successCb = (msg: any) => {
            if (msg === 'RUN_COMPLETE') {
                resolve('')
                child.off('message', successCb)
            }
        }
        child.on('message', successCb)
    })
}