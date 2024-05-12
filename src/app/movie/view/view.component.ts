import { Component } from '@angular/core';

import { MovieService } from '../movie.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Movie } from '../movie';
import { CommonModule } from '@angular/common';

  

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'

})

export class ViewComponent {

  id!: number;
  movie!: Movie;
  deleteModalOpen = false;
  movieToDeleteId: number | undefined;

    

  constructor(

    public movieService: MovieService,
    private route: ActivatedRoute,
    private router: Router

   ) { }

      

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {

    this.id = this.route.snapshot.params['movieId'];

          
    this.movieService.find(this.id).subscribe((data: Movie)=>{
      this.movie = data;
    });
  }

  openDeleteConfirmation(movieId: number) {
    this.movieToDeleteId = movieId;
    this.deleteModalOpen = true;
  }

  closeDeleteConfirmation() {
    this.deleteModalOpen = false;
    this.movieToDeleteId = undefined;
  }

  deleteMovieConfirmed() {
    if (this.movieToDeleteId) {
      this.movieService.delete(this.movieToDeleteId).subscribe(() => {
         console.log('Movie deleted successfully!');
      });
    }
    this.closeDeleteConfirmation();
  }
  

}