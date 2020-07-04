import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserRepository } from '../user/user.repository';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: '@#-=!supersecretKey123/>',
      signOptions: {
        expiresIn: 3600,
        issuer: 'boilerplate',
      }
    })
  ],
  providers: [AuthService]
})
export class AuthModule { }
