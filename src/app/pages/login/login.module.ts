import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {MatFormFieldModule} from '@angular/material/';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule, MatFormFieldModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
