import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { SignUpService } from 'app/services/signup';
import { SignUpModel } from 'app/model/users';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

 
  // tslint:disable-next-line: max-line-length
  // data = {username : '', mobileNumber : '',email :' ', password : ' ',profilePicture : ' ',dob : ' ', address : ' ',designationId : ' ',statusId : ' ',roleId : ' '};

  constructor(
    private SignUpService:SignUpService,
    private cdref:ChangeDetectorRef
  ) { }
  private _data: SignUpModel = {};
  @Input()
  get data() {
    return this._data;
  }
  set data(d) {
    this._data = d;
    this.cdref.markForCheck();
  }

  ngOnInit() {
    console.log(this);
  }
   

  register() {
    const updatable = {
      username: this.data.username,
      password: this.data.password,
      email: this.data.email,
      mobileNumber: this.data.mobileNumber,
      profilePicture: this.data.profilePicture,
      designationId: this.data.designationId,
      dob: this.data.dob,
      address: this.data.address,
      statusId: this.data.statusId,
      roleId: this.data.roleId,
      // acceptable_currency: this.data.acceptable_currency
    };
    
    console.log(this);
    this.SignUpService.enquiryAction(updatable).subscribe((res)=> {
        this.cdref.markForCheck(); 
    });
}

}
