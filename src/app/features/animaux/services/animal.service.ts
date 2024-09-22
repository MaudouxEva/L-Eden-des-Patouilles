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

     // Récupère uniquement les animaux disponibles à l'adoption (adopte: false)
     //  retourne un Observable qui émettra tableau d'animaux. 
     // Observale = flux de données que l'on peut suivre pour recevoir les informations asynchrones
     findAvailable(): Observable<Animal[]> {
      // requête HTTP de type GET
      return this._http.get<Animal[]>(`${this.apiUrl}?adopte=false`);
    }

    // Récupère uniquement les animaux adoptés (adopte: true)
    findAdopted(): Observable<Animal[]> {
      return this._http.get<Animal[]>(`${this.apiUrl}?adopte=true`);
    }
}

