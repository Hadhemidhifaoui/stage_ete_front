import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Form } from '../models/form';
import { Question } from '../models/question';


@Injectable({
  providedIn: 'root'
})
export class FormsService {
  formulaire!: Form;
  private api = "/api/formulaires/";
  constructor(private http: HttpClient) { }
  getForms(): Observable<Form[]> {

    return this.http.get<Form[]>(environment.ip +'/api/formulaires');
  }

  getForm(formId: string): Observable<Form> {
    return this.http.get<Form>(`${environment.ip +'/api/formulaires'}/${formId}`);
  }

  createform(formulaire: FormData) {
    return this.http.post<Form>(environment.ip +'/question/newQ', formulaire);
  }
  createForm(formulaire: Form): Observable<Form> {
    return this.http.post<Form>(environment.ip +'/question/newQ', formulaire);
  }

  createFormulaire(formulaire: FormData) {

    return this.http.post(environment.ip +'/question/newQ', formulaire, {responseType: 'text'});
  }

}
