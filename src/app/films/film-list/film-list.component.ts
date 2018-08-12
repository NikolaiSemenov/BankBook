import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

import * as fromFilms from '../../store/reducers/films';
import * as FilmsActions from '../../store/actions/films';
import { Film } from '../../shared/models/film.model';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {
  length = 1000;
  pageSize = 20;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  datasource: Film[];
  page = 0;
  pageIndex = 1;
  activePageDataChunk: any[];
  subscribtion: Subscription;

  constructor(
    private store: Store<fromFilms.FeatureState>,
    private router: Router
  ) {}

  ngOnInit() {
    this.subscribtion = this.store.select('films').subscribe(data => {
      if (data.catalogFilms) {
        this.length = data.catalogFilms.total_results;
        this.datasource = data.catalogFilms.results;
        this.activePageDataChunk = this.datasource
          .slice(this.page, this.pageSize * this.pageIndex)
          .map(item => {
            return {
              ...item,
              cols: 1,
              rows: 1
            };
          });
      } else {
        this.store.dispatch(new FilmsActions.fetchCatalogFilms(this.pageIndex));
      }
    });
  }

  getUrlImage(nameImage: string): string {
    return nameImage != null
      ? `https://image.tmdb.org/t/p/w500${nameImage}`
      : '/assets/500x750.png';
  }

  onPageChanged(e) {
    this.page = e.pageIndex * e.pageSize;
    this.pageIndex = e.pageIndex + 1;
    if (!this.datasource[e.pageIndex * this.pageSize]) {
      this.store.dispatch(new FilmsActions.fetchCatalogFilms(e.pageIndex + 1));
    } else {
      this.activePageDataChunk = this.datasource.slice(
        this.page,
        this.pageSize * this.pageIndex
      );
    }
  }

  selectedFilm(film: Film) {
    this.store.dispatch(new FilmsActions.setSelectedFilm(film));
    this.router.navigate(['/films', film.id]);
  }
  ngOnDestroy() {
    this.subscribtion.unsubscribe();
  }
}
