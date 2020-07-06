import { Module, Global } from '@nestjs/common';
import { AccessControlService } from './access-control.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoleRepository } from 'src/database/repository/role.repository';
import { PermissionRepository } from 'src/database/repository/permission.repository';

@Global()
@Module({
  imports: [
    TypeOrmModule.forFeature([RoleRepository, PermissionRepository])
  ],
  providers: [AccessControlService]
})
export class AccessControlModule { }
