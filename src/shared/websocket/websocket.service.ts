import { Injectable } from '@nestjs/common';
import { WebsocketGateway } from './websocket.gateway';
import { Server } from 'socket.io';

@Injectable()
export class WebsocketService {
  constructor(private websocketGateway: WebsocketGateway) { }

  // get socket
  getSocket(): Server {
    return this.websocketGateway.getSocket()
  }

}
