import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    // Email formato
    let emailRegex: string = '^[a-z]+@[a-z]+\\.[a-z]{2,3}$';
    // Ocho caracteres, al menos una letra mayúscula, una letra minúscula, un número y un carácter especial
    let passwordRegex: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(emailRegex)]],
      userName: ['', Validators.required],
      password: ['', [Validators.required, Validators.pattern(passwordRegex)]]
    })
  }
  registration() {
    this._snackBar.open("Registro exitoso!");
  }
}
