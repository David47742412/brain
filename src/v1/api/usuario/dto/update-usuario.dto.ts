import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';

export class UpdateUsuarioDto extends PartialType(OmitType(CreateUsuarioDto, ['usuario_id'] as const)) {

}
