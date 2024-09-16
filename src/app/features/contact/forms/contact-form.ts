import { Validators } from "@angular/forms";

export const contactForm = {
    nom: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    prenom: [null, [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
    email: [null, [Validators.required, Validators.email]],
    telephone: [null, []],
    dateRdv: [null, [Validators.required,]],
}