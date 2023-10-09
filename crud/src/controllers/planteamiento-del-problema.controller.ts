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
import {PlanteamientoDelProblema} from '../models';
import {PlanteamientoDelProblemaRepository} from '../repositories';

export class PlanteamientoDelProblemaController {
  constructor(
    @repository(PlanteamientoDelProblemaRepository)
    public planteamientoDelProblemaRepository : PlanteamientoDelProblemaRepository,
  ) {}

  @post('/planteamiento-del-problemas')
  @response(200, {
    description: 'PlanteamientoDelProblema model instance',
    content: {'application/json': {schema: getModelSchemaRef(PlanteamientoDelProblema)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlanteamientoDelProblema, {
            title: 'NewPlanteamientoDelProblema',
            exclude: ['id'],
          }),
        },
      },
    })
    planteamientoDelProblema: Omit<PlanteamientoDelProblema, 'id'>,
  ): Promise<PlanteamientoDelProblema> {
    return this.planteamientoDelProblemaRepository.create(planteamientoDelProblema);
  }

  @get('/planteamiento-del-problemas/count')
  @response(200, {
    description: 'PlanteamientoDelProblema model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(PlanteamientoDelProblema) where?: Where<PlanteamientoDelProblema>,
  ): Promise<Count> {
    return this.planteamientoDelProblemaRepository.count(where);
  }

  @get('/planteamiento-del-problemas')
  @response(200, {
    description: 'Array of PlanteamientoDelProblema model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(PlanteamientoDelProblema, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(PlanteamientoDelProblema) filter?: Filter<PlanteamientoDelProblema>,
  ): Promise<PlanteamientoDelProblema[]> {
    return this.planteamientoDelProblemaRepository.find(filter);
  }

  @patch('/planteamiento-del-problemas')
  @response(200, {
    description: 'PlanteamientoDelProblema PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlanteamientoDelProblema, {partial: true}),
        },
      },
    })
    planteamientoDelProblema: PlanteamientoDelProblema,
    @param.where(PlanteamientoDelProblema) where?: Where<PlanteamientoDelProblema>,
  ): Promise<Count> {
    return this.planteamientoDelProblemaRepository.updateAll(planteamientoDelProblema, where);
  }

  @get('/planteamiento-del-problemas/{id}')
  @response(200, {
    description: 'PlanteamientoDelProblema model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(PlanteamientoDelProblema, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(PlanteamientoDelProblema, {exclude: 'where'}) filter?: FilterExcludingWhere<PlanteamientoDelProblema>
  ): Promise<PlanteamientoDelProblema> {
    return this.planteamientoDelProblemaRepository.findById(id, filter);
  }

  @patch('/planteamiento-del-problemas/{id}')
  @response(204, {
    description: 'PlanteamientoDelProblema PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(PlanteamientoDelProblema, {partial: true}),
        },
      },
    })
    planteamientoDelProblema: PlanteamientoDelProblema,
  ): Promise<void> {
    await this.planteamientoDelProblemaRepository.updateById(id, planteamientoDelProblema);
  }

  @put('/planteamiento-del-problemas/{id}')
  @response(204, {
    description: 'PlanteamientoDelProblema PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() planteamientoDelProblema: PlanteamientoDelProblema,
  ): Promise<void> {
    await this.planteamientoDelProblemaRepository.replaceById(id, planteamientoDelProblema);
  }

  @del('/planteamiento-del-problemas/{id}')
  @response(204, {
    description: 'PlanteamientoDelProblema DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.planteamientoDelProblemaRepository.deleteById(id);
  }
}
