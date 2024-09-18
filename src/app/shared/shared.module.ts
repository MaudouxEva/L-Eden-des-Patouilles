import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { FormErrorComponent } from './form-error/form-error.component';


@NgModule({
  declarations: [
    FormErrorComponent,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ], 
  exports: [
    FormErrorComponent // Exporte le composant pour qu'il soit utilisé dans d'autres modules
  ]
})
export class SharedModule { }
