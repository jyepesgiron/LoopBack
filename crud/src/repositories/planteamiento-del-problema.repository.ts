import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NoRelacionalDataSource} from '../datasources';
import {PlanteamientoDelProblema, PlanteamientoDelProblemaRelations} from '../models';

export class PlanteamientoDelProblemaRepository extends DefaultCrudRepository<
  PlanteamientoDelProblema,
  typeof PlanteamientoDelProblema.prototype.id,
  PlanteamientoDelProblemaRelations
> {
  constructor(
    @inject('datasources.No_Relacional') dataSource: NoRelacionalDataSource,
  ) {
    super(PlanteamientoDelProblema, dataSource);
  }
}
