import { Component } from '@angular/core';
import { Store } from '../../node_modules/@ngrx/store';

import * as fromFilms from './store/reducers/films';
import * as FilmsActioms from './store/actions/films';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
