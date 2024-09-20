import { ResolveFn } from '@angular/router';
import {Observable} from "rxjs";
import {AnimalService} from "../../features/animaux/services/animal.service";
import {inject} from "@angular/core";
import {Animal} from "../../features/animaux/models/animal";

export const listeAnimauxResolver: ResolveFn<Observable<Animal[]>> = (route, state) => {
    const animalService: AnimalService = inject(AnimalService);
    return animalService.findAvailable();
};

