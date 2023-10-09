import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {NoRelacionalDataSource} from '../datasources';
import {Conclusion, ConclusionRelations} from '../models';

export class ConclusionRepository extends DefaultCrudRepository<
  Conclusion,
  typeof Conclusion.prototype.id,
  ConclusionRelations
> {
  constructor(
    @inject('datasources.No_Relacional') dataSource: NoRelacionalDataSource,
  ) {
    super(Conclusion, dataSource);
  }
}
