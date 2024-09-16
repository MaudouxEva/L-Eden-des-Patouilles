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

  // Méthode pour récupérer tous les animaux
  findAll(): Observable<Animal[]> {
    return this._http.get<Animal[]>(this.apiUrl);
  }

  // Méthode pour récupérer un animal par ID
  findById(id: number): Observable<Animal> {
    return this._http.get<Animal>(this.apiUrl + '/' + id);
  }

     // Méthode pour récupérer uniquement les animaux disponibles (adopte: false)
     findAvailable(): Observable<Animal[]> {
      return this._http.get<Animal[]>(`${this.apiUrl}?adopte=false`);
    }
  
    // Méthode pour récupérer uniquement les animaux adoptés (adopte: true)
    findAdopted(): Observable<Animal[]> {
      return this._http.get<Animal[]>(`${this.apiUrl}?adopte=true`);
    }
}

