import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Movie } from './movie';


@Injectable({
  providedIn: 'root'
})

export class MovieService {

  private apiURL = "http://localhost:8000/api/movies";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }
    
  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  create(movie:Movie): Observable<any> {
    return this.httpClient.post(this.apiURL, JSON.stringify(movie), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  


  /**
   * Write code on Method
   *
   * @return response()
   */
  find(id:number): Observable<any> {
    return this.httpClient.get(this.apiURL + '/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */

  update(id:number, movie:Movie): Observable<any> {
    return this.httpClient.put(this.apiURL + '/' + id, JSON.stringify(movie), this.httpOptions)
    .pipe( 
      catchError(this.errorHandler)
    )
  }

  /**
   * Write code on Method
   *
   * @return response()
   */

  delete(id:number){
    return this.httpClient.delete(this.apiURL + '/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  /** 
   * Write code on Method
   *
   * @return response()
   */
  errorHandler(error:any) {

    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
}