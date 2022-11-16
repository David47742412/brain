import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose/dist';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop()
  usuario_foto: string;

  @Prop()
  usuario_dni: string;

  @Prop()
  usuario_nombre: string;

  @Prop()
  usuario_apellido: string;

  @Prop()
  usuario_numero: string;

  @Prop()
  usuario_email: string;

  @Prop()
  usuario_password: string;

  @Prop()
  usuario_create: string;

  @Prop()
  usuario_update: string;

  @Prop()
  usuario_latitud: number;

  @Prop()
  usuario_longitud: number;

  @Prop()
  usuario_token: string;
}

export const UserSchema = SchemaFactory.createForClass(User);