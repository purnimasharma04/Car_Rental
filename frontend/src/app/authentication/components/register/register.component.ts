import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication/authentication.service';
import { StorageService } from '../../services/storage/storage.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'], // corrected styleUrl to styleUrls
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  passwordStrength = 0;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, this.passwordStrengthValidator.bind(this)]],
      confirmPassword: ['', [Validators.required]],
    });
  }

  checkPasswordStrength(password: string): number {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (password.match(/[a-z]+/)) strength++;
    if (password.match(/[A-Z]+/)) strength++;
    if (password.match(/[0-9]+/)) strength++;
    if (password.match(/[$@#&!]+/)) strength++;
    return strength;
  }

  handlePasswordChange() {
    const password = this.registerForm.get('password')?.value;
    if (password) {
      this.passwordStrength = this.checkPasswordStrength(password);
    }
  }

  passwordStrengthValidator(control: any) {
    const password = control.value;
    const strength = this.checkPasswordStrength(password);
    return strength < 4 ? { passwordStrength: true } : null;
  }

  isFormValid(): boolean {
    return (
      this.registerForm.valid &&
      this.registerForm.get('password')?.value === this.registerForm.get('confirmPassword')?.value
    );
  }

  register() {
    if (this.isFormValid()) {
      console.log(this.registerForm.value);
      this.authService.register(this.registerForm.value).subscribe((res) => {
        console.log(res);
        if (res.id != null) {
          this.toastr.success('You are Welcome', 'Registration successful');
          this.router.navigateByUrl('/login');
        } else {
          this.toastr.error('Something went wrong', 'Registration failed');
        }
      });
    }
  }

  get name() {
    return this.registerForm.get('name');
  }

  get email() {
    return this.registerForm.get('email');
  }

  get password() {
    return this.registerForm.get('password');
  }

  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
}

