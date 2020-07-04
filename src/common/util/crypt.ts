import * as bcrypt from 'bcryptjs'

export default class Crypt {
  
  // generate salt
  public static async generateSalt(): Promise<string> {
    return await bcrypt.genSalt()
  }

  // validate value with salt
  public static async validate(value: string, salt: string): Promise<boolean> {
    const hash = await bcrypt.hash(value, salt)
    return hash === value
  }

  // genearate hash
  public static async generateHash(value: string, salt: string): Promise<string> {
    return await bcrypt.hash(value, salt)
  }

}