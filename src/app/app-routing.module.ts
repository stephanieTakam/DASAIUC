import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HOMECOMPONENT } from './modules/general/home/home.component';
import { ACCEUILCOMPONENT } from './modules/general/acceuil/acceuil.component';
import { DASACOMPONENT } from './modules/general/dasa/dasa.component';

const routes: Routes = [
  {
    path: '', component: DASACOMPONENT
  },
  {
    path: 'acceuil', component: ACCEUILCOMPONENT
  },
  {
    path: 'home', component: HOMECOMPONENT
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
