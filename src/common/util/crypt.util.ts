import * as bcrypt from 'bcryptjs'

export default class Crypt {

  public static getCrypt() {
    return bcrypt
  }
  
  // generate salt
  public static async generateSalt(value?: number): Promise<string> {
    return await bcrypt.genSalt(value || 10)
  }

  // validate value with salt
  public static async validate(value: string, hashValue: string): Promise<boolean> {
    // const hash = await bcrypt.hash(value, salt)
    // return hash === value
    return await bcrypt.compare(value, hashValue)
  }

  // genearate hash
  public static async generateHash(value: string, salt: string): Promise<string> {
    return await bcrypt.hash(value, salt)
  }

}