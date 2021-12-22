import { LocationChangeEvent } from "@angular/common";
import { Endereco } from './endereco';

export interface Empresa {
  _id: number;
  cnpj: string;
  nome: string;
  email: string;
  confirma_email: string;
  area_atuacao: string;
  telefone: string;
  fax: string;
  endereco: JSON;
  vagas:JSON[];
}
