import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NoRelacionalDataSource} from '../datasources';
import {TituloTentativo, TituloTentativoRelations} from '../models';

export class TituloTentativoRepository extends DefaultCrudRepository<
  TituloTentativo,
  typeof TituloTentativo.prototype.id,
  TituloTentativoRelations
> {
  constructor(
    @inject('datasources.No_Relacional') dataSource: NoRelacionalDataSource,
  ) {
    super(TituloTentativo, dataSource);
  }
}
