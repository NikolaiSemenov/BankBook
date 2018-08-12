import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromFilms from '../../store/reducers/films';
import { Film } from '../../shared/models/film.model';
import { GetImageService } from '../../shared/services/get-image.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {
  id: number;
  film: Film;
  constructor(
    private store: Store<fromFilms.FeatureState>,
    private getImageService: GetImageService
  ) {}

  ngOnInit() {
    this.store
      .select('films')
      .subscribe(data => (this.film = data.selectedFilm));
  }

  getUrlImage(nameImage: string): string {
    return this.getImageService.getImage(nameImage);
  }
}
