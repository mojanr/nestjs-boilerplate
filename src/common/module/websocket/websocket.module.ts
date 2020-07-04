import { Module, DynamicModule } from '@nestjs/common';
import { WebsocketService } from './websocket.service';

@Module({
  providers: [WebsocketService]
})
export class WebsocketModule {
  static forRoot(): DynamicModule {
    return {
      global: true,
      module: WebsocketModule,
      providers: [WebsocketService],
      exports: [WebsocketService]
    }
  }
}
