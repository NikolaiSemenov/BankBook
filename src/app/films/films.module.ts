import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { FilmsRoutingModule } from './films-routing.module';
import { FilmsComponent } from './films.component';
import { FilmDetailComponent } from './film-detail/film-detail.component';
import { FilmListComponent } from './film-list/film-list.component';

@NgModule({
  declarations: [FilmsComponent, FilmDetailComponent, FilmListComponent],
  imports: [CommonModule, FilmsRoutingModule, SharedModule]
})
export class FilmsModule {}
