import { Repository, EntityRepository } from "typeorm";
import { Role } from "../entity/role.entity";

@EntityRepository(Role)
export class RoleRepository extends Repository<Role> {

  // get roles
  async getRoles(): Promise<Role[]> {
    return this.find()
  }
  
}