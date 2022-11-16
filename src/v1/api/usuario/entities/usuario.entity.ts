import { PrimaryGeneratedColumn } from "typeorm";
import { Column } from "typeorm/decorator/columns/Column";
import { Entity } from "typeorm/decorator/entity/Entity";
import { UsuarioInterface } from "./usuario.interface";

@Entity()
export class Usuario implements UsuarioInterface {


  @PrimaryGeneratedColumn({ type: "int", unsigned: true })
  usuario_id: number;

  @Column({ type: "varchar", length: 50 })
  usuario_foto: string;

  @Column({ type: "varchar", length: 8, unique: true })
  usuario_dni: string;

  @Column({ type: "varchar", length: 50 })
  usuario_nombre: string;

  @Column({ type: "varchar", length: 50 })
  usuario_apellido: string;

  @Column({ type: "varchar", length: 9 })
  usuario_numero_telefono: string;

  @Column({ type: "varchar", length: 50, unique: true })
  usuario_email: string;

  @Column({ type: "varchar", length: 50 })
  usuario_password: string;

  @Column({ type: "datetime" })
  usuario_create: string;

  @Column({ type: "datetime" })
  usuario_update: string;

  @Column({ type: "float" })
  usuario_latitud: number;

  @Column({ type: "float" })
  usuario_longitud: number;

  @Column({ type: "varchar", length: 500 })
  usuario_token: string;
}