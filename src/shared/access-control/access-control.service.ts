import { Injectable } from '@nestjs/common';
import { AccessControl } from 'accesscontrol'
import { InjectRepository } from '@nestjs/typeorm';
import { RoleRepository } from 'src/database/repository/role.repository';
import { PermissionRepository } from 'src/database/repository/permission.repository';
import { Connection } from 'typeorm';
import { Role } from 'src/database/entity/role.entity';
import { Permission } from 'src/database/entity/permission.entity';

@Injectable()
export class AccessControlService {
  private accessControl: AccessControl
  private grantList = [
    { role: 'admin', resource: 'video', action: 'create:any', attributes: ['*', '!views'], metaData: 'test'},
    // { role: 'admin', resource: 'video', action: 'read:any', attributes: '*' },
    { role: 'admin', resource: 'video', action: 'update:any', attributes: '*, !views' },
    { role: 'admin', resource: 'video', action: 'delete:any', attributes: '*' },
    { role: 'admin', resource: 'video', action: 'read', attributes: '*' },

    { role: 'user', resource: 'video', action: 'create:own', attributes: '*, !rating, !views' },
    { role: 'user', resource: 'video', action: 'read:any', attributes: '*' },
    { role: 'user', resource: 'video', action: 'update:own', attributes: '*, !rating, !views' },
    { role: 'user', resource: 'video', action: 'delete:own', attributes: '*' }
  ];

  constructor(
    @InjectRepository(RoleRepository) private roleRepository: RoleRepository,
    @InjectRepository(PermissionRepository) private permissionRepository: PermissionRepository,
    private connection: Connection
  ) {
    // this.accessControl = new AccessControl(this.grantList)
    // console.log(this.accessControl.getGrants())
    // console.log(this.accessControl.can('admin').read('video').granted)
    // console.log(this.accessControl.can('admin').createAny('video').attributes)
    // console.log(this.accessControl.can('admin').readAny('video').attributes)
    // console.log(this.accessControl.get)
    // this.getAccessControlList()
    this.syncAccessControl()
  }

  async syncAccessControl() {
    const accessControlList = await this.getAccessControlList()
    // console.log(accessControlList)
    this.setAccessControl(accessControlList)
    // console.log(
    //   this.accessControl.permission({
    //     role: 'admin',
    //     resource: 'video',
    //     action: 'read',
    //     possession: null
    //   })
    // )
  }

  // get access list
  async getAccessControlList(): Promise<any[]> {
    // access control
    let accessControlList: any[] = await this.connection.query(`
      SELECT  
      b.name AS role,
      c.resource,
      CONCAT_WS(':', c.action, c.possession) AS action,
      CONCAT_WS(',', b.attributes, c.attributes) AS attributes
      FROM role_permissions_permission a
      LEFT JOIN role b ON b.id = a.roleId
      LEFT JOIN permission c ON c.id = a.permissionId 
    `)
    // normalize
    return accessControlList.map((item, index) => {
      return {
        ...item,
        attributes: Array.from(new Set([...item.attributes.split(',')]))
      }
    })
  }

  // set access control
  setAccessControl(accessControlList: any) {
    this.accessControl = new AccessControl(accessControlList)
  }

  // get access control
  getAccessControl() {
    return this.accessControl
  }

}
