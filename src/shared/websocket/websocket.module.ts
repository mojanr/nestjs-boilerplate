import { Module, Global } from '@nestjs/common';
import { WebsocketService } from './websocket.service';
import { WebsocketGateway } from './websocket.gateway';

@Global()
@Module({
  imports: [

  ],
  providers: [
    WebsocketGateway,
    WebsocketService
  ],
  exports: [
    WebsocketService
  ]
})
export class WebsocketModule { }
