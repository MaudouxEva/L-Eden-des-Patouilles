import { Component } from '@angular/core';
import { Animal } from '../../models/animal';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-details-animal',
  templateUrl: './details-animal.component.html',
  styleUrl: './details-animal.component.scss'
})
export class DetailsAnimalComponent {

  animal!: Animal; 

  constructor(
    private readonly _animalService: AnimalService,
    private readonly _ar: ActivatedRoute
  ) {

    // Récup de l'ID depuis les paramètres de la route
    let id = + this._ar.snapshot.params['id'];
    // Appel a ma méthode pour récupérer l'animal de l'id
    
    this._animalService.findById(id).subscribe({
      next: (animal: Animal) => {
        this.animal = animal; 
      },
      error: (err) => {
        console.error('Erreur lors de la récupération de l\'animal', err);
      }
    });
  }
}
