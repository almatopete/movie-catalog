import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
  state,
  keyframes
} from "@angular/animations";
@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  animations: [
    trigger("listAnimation", [
      transition("* => *", [
        // each time the binding value changes
        query(
          ":leave",
          [stagger(100, [animate("0.5s", style({ opacity: 0 }))])],
          { optional: true }
        ),
        query(
          ":enter",
          [
            style({ opacity: 0 }),
            stagger(100, [animate("0.5s", style({ opacity: 1 }))])
          ],
          { optional: true }
        )
      ])
    ]),
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1, 'overflow-x': 'hidden'}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    ),
    trigger('slideIn', [
      state('*', style({ 'overflow-y': 'hidden' })),
      state('void', style({ 'overflow-y': 'hidden' })),
      transition('* => void', [
        style({ height: '*' }),
        animate(250, style({ height: 0 }))
      ]),
      transition('void => *', [
        style({ height: '0' }),
        animate(250, style({ height: '*' }))
      ])
    ])
  ]
})

export class IndexComponent {
  movies: Movie[] = [];
  deleteModalOpen = false;
  movieToDeleteId: number | undefined;
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

  openDeleteConfirmation(movieId: number) {
    this.movieToDeleteId = movieId;
    this.deleteModalOpen = true;
  }

  closeDeleteConfirmation() {
    this.deleteModalOpen = false;
    this.movieToDeleteId = undefined;
  }

  deleteMovieConfirmed() {
    let myId = this.movieToDeleteId;
    if (this.movieToDeleteId) {
      this.movieService.delete(this.movieToDeleteId).subscribe(() => {

        this.movies = this.movies.filter(item => item.id !== myId);
console.log(this.movies);
         console.log('Movie deleted successfully!');
      });
    }
    this.closeDeleteConfirmation();
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