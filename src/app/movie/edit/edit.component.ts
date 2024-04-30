import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { MovieService } from '../movie.service';

import { ActivatedRoute, Router } from '@angular/router';

import { Movie } from '../movie';

import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

  

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})

export class EditComponent {

  id!: number;
  movie!: Movie;
  form!: FormGroup;


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

        
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      synopsis: new FormControl('', Validators.required),
      year: new FormControl('', Validators.required),
      cover: new FormControl('', Validators.required)
    });
  }

      

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  } 

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){

    console.log(this.form.value);
    this.movieService.update(this.id, this.form.value).subscribe((res:any) => {
         console.log('Movie updated successfully!');
         this.router.navigateByUrl('movie/index');
    })
  }
}