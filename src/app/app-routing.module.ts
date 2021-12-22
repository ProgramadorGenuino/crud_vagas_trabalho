import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo:'empresa'},
  {
    path: 'empresa',
    loadChildren: () => import('./empresa/empresa.module').then(mod => mod.EmpresaModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
