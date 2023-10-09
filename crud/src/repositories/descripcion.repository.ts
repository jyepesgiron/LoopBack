import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NoRelacionalDataSource} from '../datasources';
import {Descripcion, DescripcionRelations} from '../models';

export class DescripcionRepository extends DefaultCrudRepository<
  Descripcion,
  typeof Descripcion.prototype.id,
  DescripcionRelations
> {
  constructor(
    @inject('datasources.No_Relacional') dataSource: NoRelacionalDataSource,
  ) {
    super(Descripcion, dataSource);
  }
}
