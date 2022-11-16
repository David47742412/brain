import { IsNotEmpty } from 'class-validator';
import { IsEmail, IsNumberString, IsString } from 'class-validator';
import { UserInterface } from '../Interface/user.Inferface';
import { User } from '../schema/user.schema';

export class CreateUserDto implements UserInterface {
  
  @IsNotEmpty()
  @IsString()
  usuario_foto: string;

  @IsNotEmpty()
  @IsNumberString()
  usuario_dni: string;

  @IsNotEmpty()
  usuario_nombre: string;

  @IsNotEmpty()
  @IsString()
  usuario_apellido: string;

  @IsNotEmpty()
  @IsNumberString()
  usuario_numero: string;

  @IsNotEmpty()
  @IsEmail()
  usuario_email: string;

  @IsNotEmpty()
  usuario_password: string;

  @IsNotEmpty()
  usuario_create: string;

  @IsNotEmpty()
  usuario_update: string;

  usuario_latitud: number;

  usuario_longitud: number;

  usuario_token: string;
}
