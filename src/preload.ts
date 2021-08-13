import { contextBridge, ipcRenderer } from "electron";

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld("api", {
    send: (channel: string, data: unknown) => {
        ipcRenderer.send(channel, data);
    },
    receive: (channel: string, func: (...args: unknown[]) => void) => {
        ipcRenderer.on(channel, (event, ...args) => func(...args));
    },
});

contextBridge.exposeInMainWorld("process", {
    platform: process.platform
});