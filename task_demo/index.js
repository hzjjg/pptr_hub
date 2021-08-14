process.stdin.resume();//so the program will not close instantly

process.on('message', ({ type, data }) => {
    if (type = "request") {
        console.log('request received in child process:', data);
        const { url, params, reqId } = data
        process.send({
            type: 'response',
            response: {
                respId: reqId,
                data: getResponse(url, data)
            }
        })
        getResponse(url, params)
    }
})

const tasks = [
    {
        name: '打开浏览器',
        desc: '就打开浏览器啊',
        url: '/openBrowser',
        params: {
            appPath: { label: '浏览器安装路径', type: 'input', default: '' },
            userDir: { label: '用户数据地址', type: 'input' },
            useTempUserDir: { label: '使用临时用户数据', type: 'checkbox', default: true },
        }
    },
    {
        name: '登录',
        desc: '就登录啊',
        url: '/login',
        params: {
            account: { label: '账号', type: 'input' },
            passowrd: { label: '密码', type: 'input' }
        }
    }
]

function getResponse(url, params) {
    switch (url) {
        case '/getTasks':
            return tasks

        case '/login':
            return ((params) => params)(params)

        case '/openBrowser':
            return ((params) => params)(params)

        default:
            return 'invalid url'
    }
}


process.send('RUN_COMPLETE')