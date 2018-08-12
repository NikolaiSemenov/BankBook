import { NgModule } from '@angular/core';
import {
  MatAutocompleteModule,
  MatFormFieldModule,
  MatInputModule,
  MatOptionModule,
  MatToolbarModule,
  MatPaginatorModule,
  MatCardModule,
  MatGridListModule
} from '@angular/material';

@NgModule({
  imports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule
  ],
  exports: [
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatCardModule,
    MatGridListModule
  ]
})
export class MaterialModule {}
