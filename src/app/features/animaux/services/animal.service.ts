import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../models/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private readonly apiUrl = 'http://localhost:3000/animaux'; // URL du fichier JSON sur le JSON-server

  constructor(
    private readonly _http: HttpClient,
  ) { }

 // Récupérer un animal par son id
  findById(id: number): Observable<Animal> {
    return this._http.get<Animal>(this.apiUrl + '/' + id);
  }

     // Récupérer uniquement les animaux disponibles (adopte: false)
     findAvailable(): Observable<Animal[]> {
      return this._http.get<Animal[]>(`${this.apiUrl}?adopte=false`);
    }

    // Rrécupérer uniquement les animaux adoptés (adopte: true)
    findAdopted(): Observable<Animal[]> {
      return this._http.get<Animal[]>(`${this.apiUrl}?adopte=true`);
    }
}

