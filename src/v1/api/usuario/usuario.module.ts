import {Module} from "@nestjs/common";
import {UsuarioController} from "./usuario.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import { UsuariopublicController } from "src/v1/usuariopublic/usuariopublic.controller";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import { JwtConfigService } from "src/v1/jwtconfiguration";
import {entities, globalService} from "../../Servicios/global.service";

@Module({
    controllers: [
        UsuarioController,
        UsuariopublicController
    ],
    imports: [
        TypeOrmModule.forFeature(
            [entities].flat()),
        PassportModule,
        JwtModule.registerAsync({
            useClass: JwtConfigService
        })],
    providers: [
        globalService].flat()

})
export class UsuarioModule {
}
