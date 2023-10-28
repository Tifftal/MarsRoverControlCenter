import { io } from 'socket.io-client';
import { makeAutoObservable } from 'mobx';

class Socket {
    socket;

    constructor() {
        makeAuthoObservable(this);
        this.socket = io(serverURI, {
            withCredentials: true,
        });
        this.pause = false;
    }
}

export default new Socket();