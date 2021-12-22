import { LocationChangeEvent } from "@angular/common";

export class Endereco {
  _id: number = 0;
  endereco: string = '';
  tipo: string = '';
  bairro: string = '';
  uf: string = '';
  cidade: string = '';
  cep: string = '';
}
