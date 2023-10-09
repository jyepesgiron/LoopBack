import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class ReferenciasTeoricas extends Entity {
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

  constructor(data?: Partial<ReferenciasTeoricas>) {
    super(data);
  }
}

export interface ReferenciasTeoricasRelations {
  // describe navigational properties here
}

export type ReferenciasTeoricasWithRelations = ReferenciasTeoricas & ReferenciasTeoricasRelations;
