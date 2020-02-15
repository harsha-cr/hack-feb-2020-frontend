import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRolesComponent } from './user-roles.component';
import {MatFormFieldModule} from '@angular/material/';

@NgModule({
  declarations: [UserRolesComponent],
  imports: [
    CommonModule,MatFormFieldModule
  ],
  exports:[UserRolesComponent]
})
export class UserRolesModule { }
