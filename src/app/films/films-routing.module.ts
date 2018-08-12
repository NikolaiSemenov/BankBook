import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilmsComponent } from './films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmListComponent } from './film-list/film-list.component';

const filmsRoutes: Routes = [
  {
    path: '',
    component: FilmsComponent,
    children: [
      { path: '', component: FilmListComponent },
      { path: ':id', component: FilmDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(filmsRoutes)],
  exports: [RouterModule]
})
export class FilmsRoutingModule {}
