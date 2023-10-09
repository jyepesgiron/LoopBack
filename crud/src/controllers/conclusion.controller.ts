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
import {Conclusion} from '../models';
import {ConclusionRepository} from '../repositories';

export class ConclusionController {
  constructor(
    @repository(ConclusionRepository)
    public conclusionRepository : ConclusionRepository,
  ) {}

  @post('/conclusions')
  @response(200, {
    description: 'Conclusion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Conclusion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Conclusion, {
            title: 'NewConclusion',
            exclude: ['id'],
          }),
        },
      },
    })
    conclusion: Omit<Conclusion, 'id'>,
  ): Promise<Conclusion> {
    return this.conclusionRepository.create(conclusion);
  }

  @get('/conclusions/count')
  @response(200, {
    description: 'Conclusion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Conclusion) where?: Where<Conclusion>,
  ): Promise<Count> {
    return this.conclusionRepository.count(where);
  }

  @get('/conclusions')
  @response(200, {
    description: 'Array of Conclusion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Conclusion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Conclusion) filter?: Filter<Conclusion>,
  ): Promise<Conclusion[]> {
    return this.conclusionRepository.find(filter);
  }

  @patch('/conclusions')
  @response(200, {
    description: 'Conclusion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Conclusion, {partial: true}),
        },
      },
    })
    conclusion: Conclusion,
    @param.where(Conclusion) where?: Where<Conclusion>,
  ): Promise<Count> {
    return this.conclusionRepository.updateAll(conclusion, where);
  }

  @get('/conclusions/{id}')
  @response(200, {
    description: 'Conclusion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Conclusion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Conclusion, {exclude: 'where'}) filter?: FilterExcludingWhere<Conclusion>
  ): Promise<Conclusion> {
    return this.conclusionRepository.findById(id, filter);
  }

  @patch('/conclusions/{id}')
  @response(204, {
    description: 'Conclusion PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Conclusion, {partial: true}),
        },
      },
    })
    conclusion: Conclusion,
  ): Promise<void> {
    await this.conclusionRepository.updateById(id, conclusion);
  }

  @put('/conclusions/{id}')
  @response(204, {
    description: 'Conclusion PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() conclusion: Conclusion,
  ): Promise<void> {
    await this.conclusionRepository.replaceById(id, conclusion);
  }

  @del('/conclusions/{id}')
  @response(204, {
    description: 'Conclusion DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.conclusionRepository.deleteById(id);
  }
}
