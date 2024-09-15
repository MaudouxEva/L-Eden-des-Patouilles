import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/pages/home/home.component';
import { AnimauxComponent } from './features/animaux/animaux.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path : 'home', redirectTo : '/'},
  { path : 'adoption', component: AnimauxComponent,
      loadChildren : () => import('./features/animaux/animaux.module').then(m => m.AnimauxModule)
   }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
