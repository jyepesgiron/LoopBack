import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NoRelacionalDataSource} from '../datasources';
import {Hipotesis, HipotesisRelations} from '../models';

export class HipotesisRepository extends DefaultCrudRepository<
  Hipotesis,
  typeof Hipotesis.prototype.id,
  HipotesisRelations
> {
  constructor(
    @inject('datasources.No_Relacional') dataSource: NoRelacionalDataSource,
  ) {
    super(Hipotesis, dataSource);
  }
}
