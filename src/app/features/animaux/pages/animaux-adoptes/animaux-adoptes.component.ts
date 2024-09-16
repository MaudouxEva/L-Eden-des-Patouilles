import { Component } from '@angular/core';
import { Animal } from '../../models/animal';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-animaux-adoptes',
  templateUrl: './animaux-adoptes.component.html',
  styleUrl: './animaux-adoptes.component.scss'
})
export class AnimauxAdoptesComponent {

  animaux : Animal[] = [];

  constructor(private readonly animalService: AnimalService) {
    this.loadAnimauxAdoptes()
  }

  private loadAnimauxAdoptes(): void {
    this.animalService.findAdopted().subscribe((data: Animal[]) => {
      this.animaux = data;
    });
  }
}
