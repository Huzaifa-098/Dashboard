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

  // UserName = new FormControl('', [Validators.required]);
  firstname = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required]);
  // DOB = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  password2 = new FormControl('', [Validators.required]);

  constructor(
    private fb: FormBuilder,
    private ApiService: ApiService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.Form = this.fb.group({
      // UserName: ['', Validators.required],
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      // DOB: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password2: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.Form);
    let data = {
      firstname: this.firstname.value,
      lastname: this.lastname.value,
      email: this.email.value,
      password: this.password.value,
      password2: this.password2.value,
    };
    this.ApiService.signup(data).subscribe((result) => {
      console.log(result);
      if (result.succes == true) {
        this.router.navigateByUrl('/auth');
      } else {
        alert('basit bhai apna kaam kryn');
      }
    });
  }
}
// export interface FavoriteChangedEventArgs {
//   newValue: boolean;
// }
