class Ipc {

    static ipc: Ipc

    static getInstance() {
        return this.ipc = this.ipc || new Ipc()
    }

    private constructor() {
        console.log('good');
    }


}