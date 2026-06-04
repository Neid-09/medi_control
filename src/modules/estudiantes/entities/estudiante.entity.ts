import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('estudiantes')
export class Estudiante {
  @ApiProperty({ description: 'ID unico del estudiante' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Primer nombre del estudiante', example: 'Neider' })
  @Column({ length: 100 })
  primerNombre: string;

  @ApiProperty({ description: 'Segundo nombre del estudiante', example: '', required: false })
  @Column({ length: 100, nullable: true })
  segundoNombre?: string;

  @ApiProperty({ description: 'Primer apellido del estudiante', example: 'Guindigua' })
  @Column({ length: 100 })
  primerApellido: string;

  @ApiProperty({ description: 'Segundo apellido del estudiante', example: '', required: false })
  @Column({ length: 100, nullable: true })
  segundoApellido?: string;

  @ApiProperty({ description: 'Cedula del estudiante', example: '1234567890' })
  @Column({ length: 20, unique: true })
  cedula: string;
}
