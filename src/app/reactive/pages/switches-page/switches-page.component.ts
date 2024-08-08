import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``,
})
export class SwitchesPageComponent {
  myform: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termsAndConditions: [false, Validators.requiredTrue],
  });

  constructor(private fb: FormBuilder) {}

  isValidFied(field: string): boolean | null {
    return (
      this.myform.controls[field].errors && this.myform.controls[field].touched
    );
  }

  onSave() {
    if (this.myform.invalid) {
      this.myform.markAllAsTouched();
      return;
    }

    console.log(this.myform.value);

    this.myform.reset();
  }
}
