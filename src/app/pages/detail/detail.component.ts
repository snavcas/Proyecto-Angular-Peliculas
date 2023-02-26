import { movies } from './../../core/services/items/items.data';
import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { Imovies } from './../../core/services/items/items.model'



@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {

  public movie?: Imovies;

  constructor(
    private activatedRoute: ActivatedRoute,
    
  ) {

    this.activatedRoute.params.subscribe((params) => {
      const productId = params['id'];
      this.movie = movies.find((movie) => productId===movie.id.toString())
      
    });
  }

}


