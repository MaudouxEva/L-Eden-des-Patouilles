import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactFormulaire : FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
) {
    this.contactFormulaire = this._fb.group({});
}

submit() {
  this.contactFormulaire.markAllAsTouched();
  if (!this.contactFormulaire.valid) {
      console.log("Non valide")
  } else {
      console.log("Valide")
  }
}

}
