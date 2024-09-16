import { Component } from '@angular/core';
import { Animal } from '../../models/animal';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-liste-animaux',
  templateUrl: './liste-animaux.component.html',
  styleUrl: './liste-animaux.component.scss'
})
export class ListeAnimauxComponent {

  animaux: Animal[] = [];

  constructor(private readonly animalService: AnimalService) {
    this.loadAnimaux();
  }

  private loadAnimaux(): void {
    this.animalService.findAvailable().subscribe((data: Animal[]) => {
      this.animaux = data;
    });
  }

}
