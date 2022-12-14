import { Router } from '@angular/router';
import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';
import { UsernameValidators } from './../signup/username.validator';
import {
  FormControl,
  FormGroupDirective,
  FormGroup,
  NgForm,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  // @Input('isFavorite') isFavorite!: boolean;
  // @Output('change') click = new EventEmitter();
  // onClick() {
  //   this.isFavorite = !this.isFavorite;
  //   this.click.emit({ newValue: this.isFavorite });
  // }
  // form = new FormGroup({
  //   userName: new FormControl('', [
  //     Validators.minLength(3),
  //     Validators.required,
  //   //   UsernameValidators.cannotContainSpace(),
  //   ]),
  //   password: new FormControl('', Validators.required),
  // });

  // get userName() {
  //   return this.form.get('userName');
  // }
  Form: FormGroup;

  UserName = new FormControl('', [Validators.required]);
  FirstName = new FormControl('', [Validators.required]);
  LastName = new FormControl('', [Validators.required]);
  DOB = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  Password = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(12),
  ]);
  CheckPassword = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(12),
  ]);

  constructor(
    private fb: FormBuilder,
    private ApiService: ApiService,
    private router: Router
  ) {
    this.Form = fb.group({
      UserName: ['', Validators.required],
      FirstName: ['', Validators.required],
      LastName: ['', Validators.required],
      DOB: ['', Validators.required],
      email: ['', Validators.required],
      Password: ['', Validators.required],
      CheckPassword: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.Form);
    let data = {
      FirstName: this.FirstName.value,
      LastName: this.LastName.value,
      email: this.email.value,
      password: this.Password.value,
      CheckPassword: this.CheckPassword.value,
    };
    this.ApiService.signup(data).subscribe((result) => {
      console.log(result);
      if (result.auth == true) {
        this.router.navigateByUrl('/auth');
      } else {
        alert('Basit Bhai apna kam kryn ap');
      }
    });
  }
}
export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
