import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NoRelacionalDataSource} from '../datasources';
import {ReferenciasTeoricas, ReferenciasTeoricasRelations} from '../models';

export class ReferenciasTeoricasRepository extends DefaultCrudRepository<
  ReferenciasTeoricas,
  typeof ReferenciasTeoricas.prototype.id,
  ReferenciasTeoricasRelations
> {
  constructor(
    @inject('datasources.No_Relacional') dataSource: NoRelacionalDataSource,
  ) {
    super(ReferenciasTeoricas, dataSource);
  }
}
