import { Component } from '@angular/core';
import { movies } from "../../core/services/items/items.data";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public movies = movies
  public moviesFilter:string="";

  

}
