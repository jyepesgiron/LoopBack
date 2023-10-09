import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Hipotesis extends Entity {
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

  constructor(data?: Partial<Hipotesis>) {
    super(data);
  }
}

export interface HipotesisRelations {
  // describe navigational properties here
}

export type HipotesisWithRelations = Hipotesis & HipotesisRelations;
