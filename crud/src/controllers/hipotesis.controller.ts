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
import {Hipotesis} from '../models';
import {HipotesisRepository} from '../repositories';

export class HipotesisController {
  constructor(
    @repository(HipotesisRepository)
    public hipotesisRepository : HipotesisRepository,
  ) {}

  @post('/hipoteses')
  @response(200, {
    description: 'Hipotesis model instance',
    content: {'application/json': {schema: getModelSchemaRef(Hipotesis)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hipotesis, {
            title: 'NewHipotesis',
            exclude: ['id'],
          }),
        },
      },
    })
    hipotesis: Omit<Hipotesis, 'id'>,
  ): Promise<Hipotesis> {
    return this.hipotesisRepository.create(hipotesis);
  }

  @get('/hipoteses/count')
  @response(200, {
    description: 'Hipotesis model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Hipotesis) where?: Where<Hipotesis>,
  ): Promise<Count> {
    return this.hipotesisRepository.count(where);
  }

  @get('/hipoteses')
  @response(200, {
    description: 'Array of Hipotesis model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Hipotesis, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Hipotesis) filter?: Filter<Hipotesis>,
  ): Promise<Hipotesis[]> {
    return this.hipotesisRepository.find(filter);
  }

  @patch('/hipoteses')
  @response(200, {
    description: 'Hipotesis PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hipotesis, {partial: true}),
        },
      },
    })
    hipotesis: Hipotesis,
    @param.where(Hipotesis) where?: Where<Hipotesis>,
  ): Promise<Count> {
    return this.hipotesisRepository.updateAll(hipotesis, where);
  }

  @get('/hipoteses/{id}')
  @response(200, {
    description: 'Hipotesis model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Hipotesis, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Hipotesis, {exclude: 'where'}) filter?: FilterExcludingWhere<Hipotesis>
  ): Promise<Hipotesis> {
    return this.hipotesisRepository.findById(id, filter);
  }

  @patch('/hipoteses/{id}')
  @response(204, {
    description: 'Hipotesis PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Hipotesis, {partial: true}),
        },
      },
    })
    hipotesis: Hipotesis,
  ): Promise<void> {
    await this.hipotesisRepository.updateById(id, hipotesis);
  }

  @put('/hipoteses/{id}')
  @response(204, {
    description: 'Hipotesis PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() hipotesis: Hipotesis,
  ): Promise<void> {
    await this.hipotesisRepository.replaceById(id, hipotesis);
  }

  @del('/hipoteses/{id}')
  @response(204, {
    description: 'Hipotesis DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.hipotesisRepository.deleteById(id);
  }
}
