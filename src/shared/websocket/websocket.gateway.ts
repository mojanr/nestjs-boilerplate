import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse, ConnectedSocket, } from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({ path: '/socket', transports: ['websocket'] })
export class WebsocketGateway {
  @WebSocketServer()
  server: Server

  getSocket(): Server {
    return this.server
  }

  @SubscribeMessage('events')
  handleEvent(
    @MessageBody() data: string,
    @ConnectedSocket() client: Socket,
  ): string {
    console.log(data)
    return data;
  }
}
