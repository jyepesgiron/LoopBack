import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NoRelacionalDataSource} from '../datasources';
import {Justificacion, JustificacionRelations} from '../models';

export class JustificacionRepository extends DefaultCrudRepository<
  Justificacion,
  typeof Justificacion.prototype.id,
  JustificacionRelations
> {
  constructor(
    @inject('datasources.No_Relacional') dataSource: NoRelacionalDataSource,
  ) {
    super(Justificacion, dataSource);
  }
}
