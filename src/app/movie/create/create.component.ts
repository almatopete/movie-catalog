import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

  

import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

  

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})

export class CreateComponent {

  form!: FormGroup;

  constructor(
    public movieService: MovieService,
    private router: Router

  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      body: new FormControl('', Validators.required)
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
    this.movieService.create(this.form.value).subscribe((res:any) => {
         console.log('Movie created successfully!');
         this.router.navigateByUrl('movie/index');
    })
  }
}