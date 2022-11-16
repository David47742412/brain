import { MapperTransformer } from "./Transformable";
import { CreateUsuarioDto } from "../api/usuario/dto/create-usuario.dto";
import { UsuarioInterface } from "../api/usuario/entities/usuario.interface";

export class UserTrasnformable implements MapperTransformer<CreateUsuarioDto, UsuarioInterface> {
  transform(usuario: CreateUsuarioDto): UsuarioInterface {

    return {
      usuario_id: usuario.usuario_id,
      usuario_apellido: usuario.usuario_apellido,
      usuario_dni: usuario.usuario_dni,
      usuario_email: usuario.usuario_email,
      usuario_foto: usuario.usuario_foto,
      usuario_latitud: usuario.usuario_latitud,
      usuario_longitud: usuario.usuario_longitud,
      usuario_nombre: usuario.usuario_nombre,
      usuario_numero_telefono: usuario.usuario_numero_telefono,
      usuario_password: usuario.usuario_password,
      usuario_update: usuario.usuario_update,
      usuario_create: usuario.usuario_create,
      usuario_token: usuario.usuario_token
    };
  }
}