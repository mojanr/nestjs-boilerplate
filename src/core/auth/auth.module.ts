import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { UserRepository } from 'src/database/repository/user.repository';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: '@#-=!supersecretKey123/>',
      signOptions: {
        expiresIn: 3600,
        issuer: 'boilerplate',
      }
    }),
    TypeOrmModule.forFeature([UserRepository])
  ],
  providers: [AuthService]
})
export class AuthModule { }
