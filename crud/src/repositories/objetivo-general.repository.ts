import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NoRelacionalDataSource} from '../datasources';
import {ObjetivoGeneral, ObjetivoGeneralRelations} from '../models';

export class ObjetivoGeneralRepository extends DefaultCrudRepository<
  ObjetivoGeneral,
  typeof ObjetivoGeneral.prototype.id,
  ObjetivoGeneralRelations
> {
  constructor(
    @inject('datasources.No_Relacional') dataSource: NoRelacionalDataSource,
  ) {
    super(ObjetivoGeneral, dataSource);
  }
}
