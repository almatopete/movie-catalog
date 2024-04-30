import { Component } from '@angular/core';

import { MovieService } from '../movie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie } from '../movie';

  

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [],
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'

})

export class ViewComponent {

  id!: number;
  movie!: Movie;

    

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

}