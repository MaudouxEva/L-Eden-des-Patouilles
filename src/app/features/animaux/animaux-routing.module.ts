import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeAnimauxComponent } from './pages/liste-animaux/liste-animaux.component';
import { DetailsAnimalComponent } from './pages/details-animal/details-animal.component';
import { AnimauxAdoptesComponent } from './pages/animaux-adoptes/animaux-adoptes.component';

const routes: Routes = [
  { path : 'nos-animaux', component : ListeAnimauxComponent},
  { path : 'animaux/:id', component : DetailsAnimalComponent},
  { path : 'animaux-adoptes', component : AnimauxAdoptesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimauxRoutingModule { }
