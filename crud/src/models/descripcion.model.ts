import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Descripcion extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  Contenido: string;

  @property({
    type: 'string',
    required: true,
  })
  id_estudiante: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Descripcion>) {
    super(data);
  }
}

export interface DescripcionRelations {
  // describe navigational properties here
}

export type DescripcionWithRelations = Descripcion & DescripcionRelations;
