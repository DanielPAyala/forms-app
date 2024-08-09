import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html',
  styles: ``,
})
export class RegisterPageComponent {
  public myForm: FormGroup = this.fb.group({
    name: [
      '',
      [Validators.required, Validators.pattern(this.firstNameAndLastnamePattern)],
    ],
    // email: ['', [Validators.required, Validators.pattern(this.emailPattern)], [new EmailValidatorService()]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)], [this.emailValidatorService]],
    username: ['', [Validators.required, this.canBeStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private validatorsService: ValidatorsService,
    private emailValidatorService: EmailValidatorService
  ) {}

  get firstNameAndLastnamePattern() {
    return this.validatorsService.firstNameAndLastnamePattern;
  }

  get emailPattern() {
    return this.validatorsService.emailPattern;
  }

  get canBeStrider() {
    return this.validatorsService.canBeStrider;
  }

  isValidField(field: string): boolean {
    return this.validatorsService.isValidField(this.myForm, field);
  }

  onSubmit() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    console.log(this.myForm.value);
  }
}
