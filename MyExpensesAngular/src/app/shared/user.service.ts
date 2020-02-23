import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURL = 'http://localhost:61483/api';

  formModel = this.fb.group({
    UserName: ['', Validators.required],
    Email: ['', Validators.email],
    FullName: [''],
    Passwords: this.fb.group({
      Password: ['', [Validators.required, Validators.minLength(4)]],
      ConfirmPassword: ['', Validators.required]
    }, { validator: this.comparePasswords })
  });

  comparePasswords(fb: FormGroup) {
    const confirm = fb.get('ConfirmPassword');
    if (confirm.errors == null || 'passwordMismatch' in confirm.errors) {
      if (fb.get('Password').value !== confirm.value) {
        confirm.setErrors({ passwordMismatch: true });
      } else {
        confirm.setErrors(null);
      }
    }
  }

  register() {
    const body = {
      UserName: this.formModel.value.UserName,
      Email: this.formModel.value.Email,
      FullName: this.formModel.value.FullName,
      Password: this.formModel.value.Passwords.Password,
    };

    return this.http.post(this.BaseURL + '/AppUser/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURL + '/AppUser/Login', formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURL + '/UserProfile');
  }
}
