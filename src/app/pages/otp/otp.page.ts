import { Component, OnInit } from '@angular/core';
import { NgOtpInputModule } from 'ng-otp-input';
@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
otp :string ='';
  constructor() { }

  ngOnInit() {
    console.log(this.otp);
  }
  onOtpChange(event: any){
this.otp = event;
console.log(this.otp);

  }

}
