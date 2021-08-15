import ToRequest from "../../utils/toRequest"

const toRequest = ToRequest()

window.api.receive('response', ({ respId, data }) => {
    toRequest.toResp(respId, data)
})

const request = toRequest.toReq((data: any) => {
    window.api.send('request', data)
})

export default request
