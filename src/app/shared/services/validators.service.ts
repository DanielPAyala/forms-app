import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ValidatorsService {
  firstNameAndLastnamePattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  canBeStrider = (control: FormControl): ValidationErrors | null => {
    const value: string = control.value?.trim().toLowerCase();

    if (value === 'strider') {
      return {
        noStrider: true,
      };
    }
    return null;
  };

  isValidField(form: FormGroup, field: string): boolean {
    return form.controls[field].errors! && form.controls[field].touched;
  }
}
