import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { DialogComponent } from 'src/app/shared/components/dialog/dialog.component';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Empresa } from '../model/empresa';
import { EmpresaService } from '../service/empresa.service';
import { EmpresaModel } from '../model/empresa.model';
import { Endereco } from '../model/endereco';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {

  empresa: EmpresaModel = new EmpresaModel();
  endereco: Endereco = new Endereco();
  cadastrar_empresa$: EmpresaModel = new EmpresaModel();
  cadastrar_endereco$: Array<Endereco> = [];
  umEndereco: Endereco = new Endereco();

  empresas$: Observable<Empresa[]>;
  displayedColumns = ['_id', 'cnpj', 'nome', 'email', 'confirma_email', 'area_atuacao', 'telefone', 'fax', 'detalhes', 'deletar'];

  // empresaService: EmpresaService; era assim

  constructor(
    private empresaService: EmpresaService,
    public error_dialog: MatDialog,
    public dialog: MatDialog) {
    // this.empresaService = new EmpresaService(); era assim
    this.empresas$ = this.empresaService.list().pipe(
      catchError(error => {
        this.onError('Anem... algo deu errado ao tentar carregar a lista de empresas')
        return of([]);
      })
    );
   }

   onError(errorMsg: string) {
    this.error_dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  onDetails(details: any) {
    this.dialog.open(DialogComponent, {
      data: details,
    });
  }

  onSingIn(cadastrar_empresa$: EmpresaModel){
    console.log(cadastrar_empresa$);
  }

  addEndereco(addEndereco: Endereco){
    this.cadastrar_endereco$.push(addEndereco);
    console.log(addEndereco)
    // this.cadastrar_endereco$.forEach(function(endereco){
    //   console.log(endereco);
    // })
  }

  onDelete(empresa: Empresa): void{
//    console.log(empresa);
    this.empresaService.delete(empresa);
  }

  ngOnInit(): void {
      // pode ser no ngOnInit ou no constructor()
  }

}
