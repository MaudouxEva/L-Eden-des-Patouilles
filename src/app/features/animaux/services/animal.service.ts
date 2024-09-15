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
    return this._http.get<Animal>(`${this.apiUrl}/${id}`);
  }

  // Méthode pour ajouter un nouvel animal (si nécessaire)
  save(animal: Animal): Observable<Animal> {
    return this._http.post<Animal>(this.apiUrl, animal);
  }

  // Méthode pour mettre à jour un animal existant (si nécessaire)
  update(id: number, animal: Animal): Observable<Animal> {
    return this._http.put<Animal>(`${this.apiUrl}/${id}`, animal);
  }

  // Méthode pour supprimer un animal par ID (si nécessaire)
  delete(id: number): Observable<void> {
    return this._http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
