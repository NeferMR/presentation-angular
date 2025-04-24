import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Project {
  _id: string;
  Nombre: string;
  Descripcion: string;
  LongText: string;
  Imagen?: string;
  Link?: string;
  Tecnologia: string[];
  Stack: string;
}

@Injectable({ providedIn: 'root' })
export class ProjectService {
  constructor(private http: HttpClient) {}
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>('https://mongodbapi.glitch.me/api/items');
  }
}
