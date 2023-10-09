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
import {ObjetivoGeneral} from '../models';
import {ObjetivoGeneralRepository} from '../repositories';

export class ObjetivoGeneralController {
  constructor(
    @repository(ObjetivoGeneralRepository)
    public objetivoGeneralRepository : ObjetivoGeneralRepository,
  ) {}

  @post('/objetivo-generals')
  @response(200, {
    description: 'ObjetivoGeneral model instance',
    content: {'application/json': {schema: getModelSchemaRef(ObjetivoGeneral)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ObjetivoGeneral, {
            title: 'NewObjetivoGeneral',
            exclude: ['id'],
          }),
        },
      },
    })
    objetivoGeneral: Omit<ObjetivoGeneral, 'id'>,
  ): Promise<ObjetivoGeneral> {
    return this.objetivoGeneralRepository.create(objetivoGeneral);
  }

  @get('/objetivo-generals/count')
  @response(200, {
    description: 'ObjetivoGeneral model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ObjetivoGeneral) where?: Where<ObjetivoGeneral>,
  ): Promise<Count> {
    return this.objetivoGeneralRepository.count(where);
  }

  @get('/objetivo-generals')
  @response(200, {
    description: 'Array of ObjetivoGeneral model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ObjetivoGeneral, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ObjetivoGeneral) filter?: Filter<ObjetivoGeneral>,
  ): Promise<ObjetivoGeneral[]> {
    return this.objetivoGeneralRepository.find(filter);
  }

  @patch('/objetivo-generals')
  @response(200, {
    description: 'ObjetivoGeneral PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ObjetivoGeneral, {partial: true}),
        },
      },
    })
    objetivoGeneral: ObjetivoGeneral,
    @param.where(ObjetivoGeneral) where?: Where<ObjetivoGeneral>,
  ): Promise<Count> {
    return this.objetivoGeneralRepository.updateAll(objetivoGeneral, where);
  }

  @get('/objetivo-generals/{id}')
  @response(200, {
    description: 'ObjetivoGeneral model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ObjetivoGeneral, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ObjetivoGeneral, {exclude: 'where'}) filter?: FilterExcludingWhere<ObjetivoGeneral>
  ): Promise<ObjetivoGeneral> {
    return this.objetivoGeneralRepository.findById(id, filter);
  }

  @patch('/objetivo-generals/{id}')
  @response(204, {
    description: 'ObjetivoGeneral PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ObjetivoGeneral, {partial: true}),
        },
      },
    })
    objetivoGeneral: ObjetivoGeneral,
  ): Promise<void> {
    await this.objetivoGeneralRepository.updateById(id, objetivoGeneral);
  }

  @put('/objetivo-generals/{id}')
  @response(204, {
    description: 'ObjetivoGeneral PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() objetivoGeneral: ObjetivoGeneral,
  ): Promise<void> {
    await this.objetivoGeneralRepository.replaceById(id, objetivoGeneral);
  }

  @del('/objetivo-generals/{id}')
  @response(204, {
    description: 'ObjetivoGeneral DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.objetivoGeneralRepository.deleteById(id);
  }
}
