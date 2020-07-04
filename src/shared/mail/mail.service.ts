import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { createTransport, Transporter, SendMailOptions } from 'nodemailer'
import { Mail } from './interface/mail.interface';

@Injectable()
export class MailService {
  private transporter: Transporter

  constructor() {
    this.transporter = createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'testAccount.user', // generated ethereal user
        pass: 'testAccount.pass', // generated ethereal password
      },
    })
  }

  async sendMail(mail: SendMailOptions): Promise<boolean> {
    try {
      let info = await this.transporter.sendMail(mail)
      return true
    } catch (error) {
      throw new InternalServerErrorException(error, 'Send mail error')
    }
  }

}
