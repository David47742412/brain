import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { ConfigModule } from '@nestjs/config';
import configuration from 'src/config/configuration';
import { enviroments } from 'src/enviroments';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: User.name,
      schema: UserSchema
    }]),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: enviroments[process.env.NODE_ENV] || ".env"
    }),
  ],

  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
