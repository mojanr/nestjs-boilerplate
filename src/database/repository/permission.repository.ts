import { Repository, EntityRepository } from "typeorm";
import { Permission } from "../entity/permission.entity";

@EntityRepository(Permission)
export class PermissionRepository extends Repository<Permission> {

  // get permissions
  async getPermssions(): Promise<Permission[]> {
    return this.find()
  }
  
}