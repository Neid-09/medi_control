import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';
import { EstudiantesService } from './estudiantes.service';

@ApiTags('Estudiantes')
@Controller('estudiantes')
export class EstudiantesController {
  constructor(private readonly estudiantesService: EstudiantesService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Crear estudiante' })
  @ApiResponse({
    status: 201,
    description: 'Estudiante creado exitosamente',
    type: Estudiante,
  })
  async create(
    @Body() createEstudianteDto: CreateEstudianteDto,
  ): Promise<Estudiante> {
    return this.estudiantesService.create(createEstudianteDto);
  }

  @Get()
  @ApiOperation({ summary: 'Obtener estudiantes' })
  @ApiResponse({
    status: 200,
    description: 'Lista de estudiantes obtenida exitosamente',
    type: [Estudiante],
  })
  async findAll(): Promise<Estudiante[]> {
    return this.estudiantesService.findAll();
  }
}
