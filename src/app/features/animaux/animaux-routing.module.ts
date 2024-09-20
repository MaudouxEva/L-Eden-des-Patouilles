import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListeAnimauxComponent } from './pages/liste-animaux/liste-animaux.component';
import { DetailsAnimalComponent } from './pages/details-animal/details-animal.component';
import { AnimauxAdoptesComponent } from './pages/animaux-adoptes/animaux-adoptes.component';
import {listeAnimauxResolver} from "../../shared/resolvers/liste-animaux.resolver";
import {animalResolver} from "../../shared/resolvers/detail.resolver";

const routes: Routes = [
  { path: '', redirectTo: 'nos-animaux', pathMatch:'full'},
  { path : 'nos-animaux', component : ListeAnimauxComponent,  resolve: { animaux: listeAnimauxResolver }},
  { path : 'animaux-adoptes', component : AnimauxAdoptesComponent},
  { path : ':id', component : DetailsAnimalComponent, resolve: { animal: animalResolver}},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnimauxRoutingModule { }
