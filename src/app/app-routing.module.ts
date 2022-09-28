import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent2 } from './modules/application/home/home.component';
import { HomeComponent } from './modules/general/home/home.component';
import { AcceuilComponent } from './modules/general/acceuil/acceuil.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'acceuil', component: AcceuilComponent
  },
  {
    path: 'home', component: HomeComponent2
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
