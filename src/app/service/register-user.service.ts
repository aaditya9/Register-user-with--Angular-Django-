import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs/Observable'
import { HttpClient   } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  constructor(
    private http: HttpClient  ,
  ) { }

  registerUserservice(userData): Observable<any> {
    return this.http.post("http://127.0.0.1:8000/quickstart/users/",userData);
  }
}
