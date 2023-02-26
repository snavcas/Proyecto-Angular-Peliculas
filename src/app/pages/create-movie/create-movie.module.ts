import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateMovieRoutingModule } from './create-movie-routing.module';
import { CreateMovieComponent } from './create-movie.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateMovieComponent
  ],
  imports: [
    CommonModule,
    CreateMovieRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class CreateMovieModule { }
