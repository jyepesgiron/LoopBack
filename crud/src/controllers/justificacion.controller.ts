import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Justificacion} from '../models';
import {JustificacionRepository} from '../repositories';

export class JustificacionController {
  constructor(
    @repository(JustificacionRepository)
    public justificacionRepository : JustificacionRepository,
  ) {}

  @post('/justificacions')
  @response(200, {
    description: 'Justificacion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Justificacion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Justificacion, {
            title: 'NewJustificacion',
            exclude: ['id'],
          }),
        },
      },
    })
    justificacion: Omit<Justificacion, 'id'>,
  ): Promise<Justificacion> {
    return this.justificacionRepository.create(justificacion);
  }

  @get('/justificacions/count')
  @response(200, {
    description: 'Justificacion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Justificacion) where?: Where<Justificacion>,
  ): Promise<Count> {
    return this.justificacionRepository.count(where);
  }

  @get('/justificacions')
  @response(200, {
    description: 'Array of Justificacion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Justificacion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Justificacion) filter?: Filter<Justificacion>,
  ): Promise<Justificacion[]> {
    return this.justificacionRepository.find(filter);
  }

  @patch('/justificacions')
  @response(200, {
    description: 'Justificacion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Justificacion, {partial: true}),
        },
      },
    })
    justificacion: Justificacion,
    @param.where(Justificacion) where?: Where<Justificacion>,
  ): Promise<Count> {
    return this.justificacionRepository.updateAll(justificacion, where);
  }

  @get('/justificacions/{id}')
  @response(200, {
    description: 'Justificacion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Justificacion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Justificacion, {exclude: 'where'}) filter?: FilterExcludingWhere<Justificacion>
  ): Promise<Justificacion> {
    return this.justificacionRepository.findById(id, filter);
  }

  @patch('/justificacions/{id}')
  @response(204, {
    description: 'Justificacion PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Justificacion, {partial: true}),
        },
      },
    })
    justificacion: Justificacion,
  ): Promise<void> {
    await this.justificacionRepository.updateById(id, justificacion);
  }

  @put('/justificacions/{id}')
  @response(204, {
    description: 'Justificacion PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() justificacion: Justificacion,
  ): Promise<void> {
    await this.justificacionRepository.replaceById(id, justificacion);
  }

  @del('/justificacions/{id}')
  @response(204, {
    description: 'Justificacion DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.justificacionRepository.deleteById(id);
  }
}
