import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnimauxRoutingModule } from './animaux-routing.module';
import { ListeAnimauxComponent } from './pages/liste-animaux/liste-animaux.component';
import { DetailsAnimalComponent } from './pages/details-animal/details-animal.component';
import { AnimauxAdoptesComponent } from './pages/animaux-adoptes/animaux-adoptes.component';
import { AnimauxComponent } from './animaux.component';


@NgModule({
  declarations: [
    AnimauxComponent,
    ListeAnimauxComponent,
    DetailsAnimalComponent,
    AnimauxAdoptesComponent,
  ],
  imports: [
    CommonModule,
    AnimauxRoutingModule,
  ],
  bootstrap : [AnimauxComponent]
})
export class AnimauxModule { }
