import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";
import { UsuarioInterface } from "../entities/usuario.interface";

export class CreateUsuarioDto implements UsuarioInterface {

  @ApiProperty()
  usuario_create: string;
  
  @ApiProperty()
  usuario_token: string;
  
  @ApiProperty()
  usuario_update: string;

  @ApiProperty()
  usuario_id: number;

  @ApiProperty()
  usuario_foto: string;

  @ApiProperty()
  usuario_dni: string;

  @ApiProperty()
  usuario_nombre: string;

  @ApiProperty()
  usuario_apellido: string;

  @ApiProperty()
  usuario_numero_telefono: string;

  @ApiProperty()
  @IsNotEmpty()
  usuario_email: string;

  @ApiProperty()
  @IsNotEmpty()
  usuario_password: string;

  @ApiProperty()
  usuario_latitud: number;

  @ApiProperty()
  usuario_longitud: number;

}
