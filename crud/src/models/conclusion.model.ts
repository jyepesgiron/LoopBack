import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Conclusion extends Entity {
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

  constructor(data?: Partial<Conclusion>) {
    super(data);
  }
}

export interface ConclusionRelations {
  // describe navigational properties here
}

export type ConclusionWithRelations = Conclusion & ConclusionRelations;
