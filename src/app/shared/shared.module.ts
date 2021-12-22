import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { DialogComponent } from './components/dialog/dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ErrorDialogComponent,
    DialogComponent
  ],
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    ErrorDialogComponent,
    DialogComponent,
    FormsModule
  ]
})
export class SharedModule { }
