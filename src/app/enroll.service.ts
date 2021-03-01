import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrollService {

  url: string = environment.host;

  constructor(private http: HttpClient) { }

  getEnrollsList(){
    return this.http.get(`${this.url}enrollees`);
  }

  getEnrollById(id: string){
    return this.http.get(`${this.url}enrollees/${id}`);
  }

  updateEnrollById(id: string, params: any){
    return this.http.put(`${this.url}enrollees/${id}`, params);
  }

}
