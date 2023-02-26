import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { movies } from "../../core/services/items/items.data";

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent {

  public movieForm?: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.movieForm = this.fb.group({
      title: new FormControl('',[Validators.required]),
      director: new FormControl('',[Validators.required]),
      year: new FormControl('',[Validators.required, Validators.maxLength(4)]),
      genres: new FormControl('',[Validators.required]),
      rating: new FormControl('',[Validators.required]),
      img: new FormControl('',[Validators.required]),
      
    })
  }

  public createNewMovie() {
    const movieCopy = [...movies];
    const greaterId = movieCopy.sort((a, b) =>{
      return parseInt(b.id, 10) - parseInt(a.id, 10);
    })[0].id;
    const newId = (parseInt(greaterId, 10) + 1).toString();
    movies.push({
      ...this.movieForm?.value,
      id: newId
    });
    this.movieForm?.reset();

  }

}
