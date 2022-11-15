import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

 
  constructor(private http: HttpClient) { }

  sendtryfreesessiondata( first_name: string,  last_name : string,  email: string, phone : string, how_did_you_hear_about_us: string,comments : string): Observable<boolean> {
    return this.http.post<boolean>("https://thebackend-weekend.herokuapp.com/trifit-wellness/try-a-free-session", {

      first_name:first_name,
      last_name:last_name,
      email:email,
      phone:phone,
      how_did_you_hear_about_us:how_did_you_hear_about_us,
      comments:comments 
    }).pipe(catchError(this.errorHandler));
  }
  
  errorHandler(error: HttpErrorResponse){
    console.error(error);
    return throwError(error.message || "Server Error");
  }
}
