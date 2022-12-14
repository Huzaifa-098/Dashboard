import { ApiService } from './../services/api.service';
import { UsernameValidators } from './../signup/username.validator';
import {
  FormControl,
  FormGroupDirective,
  FormGroup,
  NgForm,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  credentials: any = {};
  form: FormGroup;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  PasswordFormControl = new FormControl('', [Validators.required]);
  constructor(
    private ApiService: ApiService,
    private fb: FormBuilder,
    private router: Router
  ) {}
  ngOnInit() {
    this.form = this.fb.group({
      emailFormControl: ['', [Validators.required]],

      PasswordFormControl: ['', [Validators.required]],
    });
  }

  login() {
    console.log(this.form);
    let data = {
      email: this.emailFormControl.value,
      password: this.PasswordFormControl.value,
    };
    this.ApiService.login(data).subscribe((result) => {
      console.log(result);
      if (result.isAuth == true) {
        this.router.navigateByUrl('/dash');
      } else {
        alert('Basit Bhai apna kam kryn ap');
      }
    });

    //  this.ApiService.login(data).subscribe((result) => {
    //   if (result.success) {
    //     console.log(result);
    //     alert(result.message);
    //   } else {
    //     alert(result.message);
    //   }
    // });
  }
}

//   form = new FormGroup({
//     emailFormControl : new FormControl('', [Validators.required, Validators.email]),
//     passwordFormGroup : new FormGroup('', [Validators.required]),
//     confirmPasswordFormGroup : new FormGroup('', [Validators.required]),
// })
// }
//    form = new FormGroup({
//     emailFormControl: new FormControl('',
//   [Validators.required,Validators.email]),
//     passwordFormGroup : new FormControl('', [Validators.required]),
//     confirmPasswordFormGroup : new FormControl('', [Validators.required]),

//   })
// }

// form = new FormGroup({
//   passwordFormControl:  ('', [Validators.required]),
//   confirmPasswordFormControl: ['']
// }, { validators: this.checkPasswords}
//  )
// get (passwordFormControl: any) {
//   return this.form.get('passwordFormControl');
// }
// emailFormControl = new FormControl('', [Validators.required, Validators.email]);
// passwordFormControl = new FormControl('', [Validators.required]);
//  confirmPasswordFormControl = new FormControl('', [Validators.required]);
//  confirmpasswordFormControl = new FormControl('', [Validators.required]);

// }

// }
