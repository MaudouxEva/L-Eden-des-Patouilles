import { Component, Input } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
  styleUrl: './form-error.component.scss'
})

export class FormErrorComponent {
  @Input({required: true}) // recevra d'office un control depuis l'élément parent (formulaire)
    control!: AbstractControl | null;

    // récup les erreurs avec {{ error }}
    get errors(): ValidationErrors | null | undefined {
        return this.control?.errors;
    }
}