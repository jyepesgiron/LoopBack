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
import {Descripcion} from '../models';
import {DescripcionRepository} from '../repositories';

export class DescripcionController {
  constructor(
    @repository(DescripcionRepository)
    public descripcionRepository : DescripcionRepository,
  ) {}

  @post('/descripcions')
  @response(200, {
    description: 'Descripcion model instance',
    content: {'application/json': {schema: getModelSchemaRef(Descripcion)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Descripcion, {
            title: 'NewDescripcion',
            exclude: ['id'],
          }),
        },
      },
    })
    descripcion: Omit<Descripcion, 'id'>,
  ): Promise<Descripcion> {
    return this.descripcionRepository.create(descripcion);
  }

  @get('/descripcions/count')
  @response(200, {
    description: 'Descripcion model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Descripcion) where?: Where<Descripcion>,
  ): Promise<Count> {
    return this.descripcionRepository.count(where);
  }

  @get('/descripcions')
  @response(200, {
    description: 'Array of Descripcion model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Descripcion, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Descripcion) filter?: Filter<Descripcion>,
  ): Promise<Descripcion[]> {
    return this.descripcionRepository.find(filter);
  }

  @patch('/descripcions')
  @response(200, {
    description: 'Descripcion PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Descripcion, {partial: true}),
        },
      },
    })
    descripcion: Descripcion,
    @param.where(Descripcion) where?: Where<Descripcion>,
  ): Promise<Count> {
    return this.descripcionRepository.updateAll(descripcion, where);
  }

  @get('/descripcions/{id}')
  @response(200, {
    description: 'Descripcion model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Descripcion, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Descripcion, {exclude: 'where'}) filter?: FilterExcludingWhere<Descripcion>
  ): Promise<Descripcion> {
    return this.descripcionRepository.findById(id, filter);
  }

  @patch('/descripcions/{id}')
  @response(204, {
    description: 'Descripcion PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Descripcion, {partial: true}),
        },
      },
    })
    descripcion: Descripcion,
  ): Promise<void> {
    await this.descripcionRepository.updateById(id, descripcion);
  }

  @put('/descripcions/{id}')
  @response(204, {
    description: 'Descripcion PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() descripcion: Descripcion,
  ): Promise<void> {
    await this.descripcionRepository.replaceById(id, descripcion);
  }

  @del('/descripcions/{id}')
  @response(204, {
    description: 'Descripcion DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.descripcionRepository.deleteById(id);
  }
}
