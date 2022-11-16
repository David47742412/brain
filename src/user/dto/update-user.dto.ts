import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(OmitType(CreateUserDto, ['usuario_token', 'usuario_email', 'usuario_dni'] as const)) {

    usuario_apellido: string;

    usuario_latitud: number;

    usuario_longitud: number;

    usuario_password: string;

    usuario_numero: string;

    usuario_nombre: string;

    usuario_foto: string;

}
