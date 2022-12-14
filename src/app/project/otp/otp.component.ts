import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css'],
})
export class OtpComponent implements OnInit {
  title = 'otp-app';

  otp!: string;
  inputDigitLeft: string = 'Verify code';
  btnStatus: string = 'btn-light';

  public configOptions = {
    length: 6,
    inputClass: 'digit-otp',
    containerClass: 'd-flex justify-content-between',
  };

  ngOnInit() {}

  onOtpChange(event: any) {
    this.otp = event;
    if (this.otp.length < this.configOptions.length) {
      this.inputDigitLeft =
        this.configOptions.length - this.otp.length + ' digits Left';
      this.btnStatus = 'btn-light';
    }

    if (this.otp.length == this.configOptions.length) {
      this.inputDigitLeft = "Let's go!";
      this.btnStatus = 'btn-primary';
    }
  }
}
