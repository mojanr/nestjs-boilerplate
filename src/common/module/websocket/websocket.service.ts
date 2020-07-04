import { Injectable } from '@nestjs/common';
import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer, WsResponse, } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway({ path: '/socket', transports: ['websocket'] })
export class WebsocketService {
  @WebSocketServer()
  server: Server

  getSocket(): Server {
    return this.server
  }

}
