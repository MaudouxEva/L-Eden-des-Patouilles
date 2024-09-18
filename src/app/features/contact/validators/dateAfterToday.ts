import {AbstractControl, ValidatorFn} from "@angular/forms";

export const dateAfterToday = (): ValidatorFn | null => {
    return (control: AbstractControl) => {
        let dateRdv: Date = new Date(control.value);
        let today: Date = new Date();

        if (dateRdv <= today) {
            return {dateAfterToday: true};
        }
        return null;
    }
}
