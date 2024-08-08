import { FormControl, ValidationErrors } from '@angular/forms';

export const canBeStrider = (control: FormControl): ValidationErrors | null => {
  const value: string = control.value?.trim().toLowerCase();

  if (value === 'strider') {
    return {
      noStrider: true,
    };
  }
  return null;
};
