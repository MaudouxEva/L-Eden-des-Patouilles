// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrl: './contact.component.scss'
// })
// export class ContactComponent {
//   contactFormulaire : FormGroup;

//   constructor(
//     private readonly _fb: FormBuilder,
// ) {
//     this.contactFormulaire = this._fb.group({});
// }

// submit() {
//   this.contactFormulaire.markAllAsTouched();
//   if (!this.contactFormulaire.valid) {
//       console.log("Non valide")
//   } else {
//       console.log("Valide")
//   }
// }

// }


import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { contactForm } from '../../forms/contact-form'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'] 
})
export class ContactComponent {
  contactFormulaire: FormGroup;

  constructor(
    private readonly _fb: FormBuilder,
  ) {
    // Initialisation du form avec les champs du contactForm
    this.contactFormulaire = this._fb.group(contactForm);
  }

  submit() {
    this.contactFormulaire.markAllAsTouched(); // Marque tous les champs comme touchés pour afficher les erreurs s'il y en a
    if (!this.contactFormulaire.valid) {
      console.log("Formulaire non valide");
    } else {
      console.log("Formulaire valide");
    }
  }
}
