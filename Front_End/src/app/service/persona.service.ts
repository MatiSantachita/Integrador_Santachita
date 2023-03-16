import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  pURL='http://localhost:8080/personas/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.pURL + 'lista');
  }

  public detail(id: number): Observable<persona>{
    return this.httpClient.get<persona>(this.pURL + `detail/${id}`);
  }
/*
  public save(educacion: Educacion): Observable<any>{
    return this.httpClient.post<any>(this.eduURL + 'create', educacion);
  }
public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
  }*/
  public update(id: number, Persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.pURL + `update/${id}`, Persona);
  }

  
}

