import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})

export class IndexComponent {
  movies: Movie[] = [];
  constructor(public movieService: MovieService) { }

  
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.movieService.getAll().subscribe((data: Movie[])=>{
      this.movies = data;
      console.log(this.movies);
    })  
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  deleteMovie(id:number){
    this.movieService.delete(id).subscribe(res => {
         this.movies = this.movies.filter(item => item.id !== id);
         console.log('Movie deleted successfully!');
    })
  }
}