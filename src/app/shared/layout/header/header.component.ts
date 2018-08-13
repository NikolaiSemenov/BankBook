import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import { Films } from '../../models/films.model';
import { Film } from '../../models/film.model';
import * as fromFilms from '../../../store/reducers/films';
import * as FilmsActions from '../../../store/actions/films';
import { GetImageService } from '../../services/get-image.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchStr = new FormControl();
  films: Films;

  constructor(
    private store: Store<fromFilms.FeatureState>,
    private router: Router,
    private getImageService: GetImageService
  ) {}

  ngOnInit() {
    this.store.select('films').subscribe(data => {
      this.films = data.searchFilms;
    });
    this.searchStr.valueChanges.forEach(value => {
      const filterValue =
        typeof value === 'string' ? value.toLowerCase() : null;
      filterValue
        ? this.store.dispatch(new FilmsActions.fetchDetectedFilms(filterValue))
        : null;
    });
  }

  selectedFilm(film: Film) {
    this.store.dispatch(new FilmsActions.setSelectedFilm(film));
    this.searchStr.reset();
    this.store.dispatch(new FilmsActions.resetDetectedFilms());
    this.router.navigate(['/films', film.id]);
  }
}
