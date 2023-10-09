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
import {TituloTentativo} from '../models';
import {TituloTentativoRepository} from '../repositories';

export class TituloTentativoController {
  constructor(
    @repository(TituloTentativoRepository)
    public tituloTentativoRepository : TituloTentativoRepository,
  ) {}

  @post('/titulo-tentativos')
  @response(200, {
    description: 'TituloTentativo model instance',
    content: {'application/json': {schema: getModelSchemaRef(TituloTentativo)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TituloTentativo, {
            title: 'NewTituloTentativo',
            exclude: ['id'],
          }),
        },
      },
    })
    tituloTentativo: Omit<TituloTentativo, 'id'>,
  ): Promise<TituloTentativo> {
    return this.tituloTentativoRepository.create(tituloTentativo);
  }

  @get('/titulo-tentativos/count')
  @response(200, {
    description: 'TituloTentativo model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(TituloTentativo) where?: Where<TituloTentativo>,
  ): Promise<Count> {
    return this.tituloTentativoRepository.count(where);
  }

  @get('/titulo-tentativos')
  @response(200, {
    description: 'Array of TituloTentativo model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(TituloTentativo, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(TituloTentativo) filter?: Filter<TituloTentativo>,
  ): Promise<TituloTentativo[]> {
    return this.tituloTentativoRepository.find(filter);
  }

  @patch('/titulo-tentativos')
  @response(200, {
    description: 'TituloTentativo PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TituloTentativo, {partial: true}),
        },
      },
    })
    tituloTentativo: TituloTentativo,
    @param.where(TituloTentativo) where?: Where<TituloTentativo>,
  ): Promise<Count> {
    return this.tituloTentativoRepository.updateAll(tituloTentativo, where);
  }

  @get('/titulo-tentativos/{id}')
  @response(200, {
    description: 'TituloTentativo model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(TituloTentativo, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(TituloTentativo, {exclude: 'where'}) filter?: FilterExcludingWhere<TituloTentativo>
  ): Promise<TituloTentativo> {
    return this.tituloTentativoRepository.findById(id, filter);
  }

  @patch('/titulo-tentativos/{id}')
  @response(204, {
    description: 'TituloTentativo PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(TituloTentativo, {partial: true}),
        },
      },
    })
    tituloTentativo: TituloTentativo,
  ): Promise<void> {
    await this.tituloTentativoRepository.updateById(id, tituloTentativo);
  }

  @put('/titulo-tentativos/{id}')
  @response(204, {
    description: 'TituloTentativo PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() tituloTentativo: TituloTentativo,
  ): Promise<void> {
    await this.tituloTentativoRepository.replaceById(id, tituloTentativo);
  }

  @del('/titulo-tentativos/{id}')
  @response(204, {
    description: 'TituloTentativo DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.tituloTentativoRepository.deleteById(id);
  }
}
