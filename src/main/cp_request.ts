import { ChildProcess } from 'child_process'
import ToRequest from "../utils/toRequest";

export default class CpRequest {

    send

    private static instance: CpRequest

    static getInstance(cp?: ChildProcess) {
        if (!cp && !this.instance) {
            throw new Error("params 'cp' required");
        }
        return this.instance = this.instance || new CpRequest(cp)
    }

    private constructor(cp: ChildProcess) {
        const toRequest = ToRequest()

        //将子进程发送过来的响应消息转换为响应
        cp.on('message', (msg: { type: string, response?: any }) => {
            const { type, response } = msg || {}

            if (type === "response" && response) {
                toRequest.toResp(response.respId, response.data)
            }
        })


        this.send = toRequest.toReq((data) => {
            cp.send({ type: 'request', data }, (error) => {
                console.error(error);
            })
        })

    }
}