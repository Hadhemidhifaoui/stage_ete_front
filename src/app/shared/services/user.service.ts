import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = environment.ip +"/api";


  constructor(private http: HttpClient, private router: Router) { }



  loginAdmin(user: User): Observable<any> {
    console.log(user);

    const url = `${this.apiUrl}/login`;
    return this.http.post(url,user,{responseType: 'text'}).pipe(map(data => {

       if (data) {
         return data
       }
     }));
   }
   logout() {
   // this.token.removeToken();
    this.router.navigate(['/login-admin']);
  }
  // loginAdmin(user:User): Observable<any> {
  //   console.log(user);
  //   return this.http.post(`${this.apiUrl}/login`, user,{responseType: 'text'});
  // }



}
