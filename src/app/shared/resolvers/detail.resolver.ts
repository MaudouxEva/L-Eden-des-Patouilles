import {ResolveFn} from "@angular/router";
import {Observable} from "rxjs";
import {Animal} from "../../features/animaux/models/animal";
import {AnimalService} from "../../features/animaux/services/animal.service";
import {inject} from "@angular/core";

export const animalResolver: ResolveFn<Animal | null> = (route, state) => {


  const animalId = route.paramMap.get('id');

    return animalId ? inject(AnimalService).findById(+animalId) : null;
}
