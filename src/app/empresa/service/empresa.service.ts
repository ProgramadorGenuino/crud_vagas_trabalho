import { Injectable } from '@angular/core';
import { Empresa } from '../model/empresa';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  //private readonly API = '/assets/empresas.json'

  private readonly HOST = 'http://localhost:8080/empresa';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Empresa[]>(this.HOST + '/list');
  }

  //alteração
  save(empresa:Empresa) {
    return this.httpClient.post(this.HOST + '/save', empresa);
  }

  delete(empresa: Empresa): void{
    this.httpClient.post(this.HOST + '/delete', empresa);
  }
}
