import { Global, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './user/schema/user.schema';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi'
import configuration from './config/configuration';
import { enviroments } from './enviroments';

@Global()
@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      process.env.DATABASE
    ),
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: enviroments[process.env.NODE_ENV] || ".env",
      validationSchema: Joi.object({
        DATABASE: Joi.string().required(),
        PORT_BD: Joi.number().required(),
        HOST: Joi.string().required()
      })
    }),
  ],
  controllers: [AppController],
  providers: [AppService, User],
})

export class AppModule {}
