import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString, Length, Matches } from 'class-validator';

export class CreateEstudianteDto {
  @ApiProperty({ description: 'Primer nombre del estudiante', example: 'Neider' })
  @IsString()
  @IsNotEmpty({ message: 'El primer nombre es obligatorio' })
  @Length(2, 100, { message: 'El primer nombre debe tener entre 2 y 100 caracteres' })
  primerNombre: string;

  @ApiPropertyOptional({ description: 'Segundo nombre del estudiante', example: '' })
  @IsOptional()
  @IsString()
  @Length(2, 100, { message: 'El segundo nombre debe tener entre 2 y 100 caracteres' })
  segundoNombre?: string;

  @ApiProperty({ description: 'Primer apellido del estudiante', example: 'Guindigua' })
  @IsString()
  @IsNotEmpty({ message: 'El primer apellido es obligatorio' })
  @Length(2, 100, { message: 'El primer apellido debe tener entre 2 y 100 caracteres' })
  primerApellido: string;

  @ApiPropertyOptional({ description: 'Segundo apellido del estudiante', example: '' })
  @IsOptional()
  @IsString()
  @Length(2, 100, { message: 'El segundo apellido debe tener entre 2 y 100 caracteres' })
  segundoApellido?: string;

  @ApiProperty({ description: 'Cedula del estudiante', example: '1234567890' })
  @IsString()
  @IsNotEmpty({ message: 'La cedula es obligatoria' })
  @Length(5, 20, { message: 'La cedula debe tener entre 5 y 20 caracteres' })
  @Matches(/^[0-9]+$/, { message: 'La cedula solo puede contener numeros' })
  cedula: string;
}
