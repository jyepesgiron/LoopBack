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
import {ReferenciasTeoricas} from '../models';
import {ReferenciasTeoricasRepository} from '../repositories';

export class ReferenciasTeoricasController {
  constructor(
    @repository(ReferenciasTeoricasRepository)
    public referenciasTeoricasRepository : ReferenciasTeoricasRepository,
  ) {}

  @post('/referencias-teoricas')
  @response(200, {
    description: 'ReferenciasTeoricas model instance',
    content: {'application/json': {schema: getModelSchemaRef(ReferenciasTeoricas)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReferenciasTeoricas, {
            title: 'NewReferenciasTeoricas',
            exclude: ['id'],
          }),
        },
      },
    })
    referenciasTeoricas: Omit<ReferenciasTeoricas, 'id'>,
  ): Promise<ReferenciasTeoricas> {
    return this.referenciasTeoricasRepository.create(referenciasTeoricas);
  }

  @get('/referencias-teoricas/count')
  @response(200, {
    description: 'ReferenciasTeoricas model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(ReferenciasTeoricas) where?: Where<ReferenciasTeoricas>,
  ): Promise<Count> {
    return this.referenciasTeoricasRepository.count(where);
  }

  @get('/referencias-teoricas')
  @response(200, {
    description: 'Array of ReferenciasTeoricas model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(ReferenciasTeoricas, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(ReferenciasTeoricas) filter?: Filter<ReferenciasTeoricas>,
  ): Promise<ReferenciasTeoricas[]> {
    return this.referenciasTeoricasRepository.find(filter);
  }

  @patch('/referencias-teoricas')
  @response(200, {
    description: 'ReferenciasTeoricas PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReferenciasTeoricas, {partial: true}),
        },
      },
    })
    referenciasTeoricas: ReferenciasTeoricas,
    @param.where(ReferenciasTeoricas) where?: Where<ReferenciasTeoricas>,
  ): Promise<Count> {
    return this.referenciasTeoricasRepository.updateAll(referenciasTeoricas, where);
  }

  @get('/referencias-teoricas/{id}')
  @response(200, {
    description: 'ReferenciasTeoricas model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(ReferenciasTeoricas, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(ReferenciasTeoricas, {exclude: 'where'}) filter?: FilterExcludingWhere<ReferenciasTeoricas>
  ): Promise<ReferenciasTeoricas> {
    return this.referenciasTeoricasRepository.findById(id, filter);
  }

  @patch('/referencias-teoricas/{id}')
  @response(204, {
    description: 'ReferenciasTeoricas PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(ReferenciasTeoricas, {partial: true}),
        },
      },
    })
    referenciasTeoricas: ReferenciasTeoricas,
  ): Promise<void> {
    await this.referenciasTeoricasRepository.updateById(id, referenciasTeoricas);
  }

  @put('/referencias-teoricas/{id}')
  @response(204, {
    description: 'ReferenciasTeoricas PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() referenciasTeoricas: ReferenciasTeoricas,
  ): Promise<void> {
    await this.referenciasTeoricasRepository.replaceById(id, referenciasTeoricas);
  }

  @del('/referencias-teoricas/{id}')
  @response(204, {
    description: 'ReferenciasTeoricas DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.referenciasTeoricasRepository.deleteById(id);
  }
}
