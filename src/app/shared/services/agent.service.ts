import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Agent } from '../models/agent';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  private api = environment.ip +"/api/agents/";
  apiUrl=environment.ip +"/apis";
  constructor(private http: HttpClient) { }
  getAgents(): Observable<Agent[]> {

    return this.http.get<Agent[]>(environment.ip +'/api/agents');
  }

  getAgent(agentId: string): Observable<Agent> {
    return this.http.get<Agent>(`${environment.ip +'/api/agents'}/${agentId}`);
  }

  createAgent(agent: Agent): Observable<Agent> {
    return this.http.post<Agent>(environment.ip +'/api/agents', agent);
  }

  //  updateAgent(agent: Agent ,agentId:any): Observable<Agent> {
  //    return this.http.put<Agent>(`${'http://192.168.1.18:8000/api/agents'}/${agentId}`, agent);
  //  }

  updateAgent(agent:Agent ,id:String){
    console.log(this.api +id)
    return this.http.put<any>(this.api +id, agent );
  }
  // deleteAgent(agentId: string): Observable<any> {
  //   return this.http.delete<any>(`${'http://192.168.1.18:8000/api/agents'}/${agentId}`);
  // }
  deleteAgent(id: string){
    return this.http.delete(this.api +id)
  }
  // loginAgent(agent: Agent): Observable<any> {
  //   console.log(agent);

  //   const url = `${this.apiUrl}/loginagent`;

  //   return this.http.post(url,agent,{responseType: 'text'}).pipe(map(data => {

  //      if (data) {
  //        return data
  //      }
  //    }));
  //  }
   loginAgent(email: string, password: string): Observable<Agent> {

    console.log(email , password);

    //get ID by email !

    const data = {email: email};

    this.http.post(`${environment.ip +'/apis/'}findByEmail`,data).subscribe(res=>{

    localStorage.setItem("User_ID", JSON.stringify(res));

    });

    return this.http.post<Agent>(`${environment.ip +'/apis'}/loginagent`, { email, password });

  }

}
