import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRolesComponent } from './user-roles.component';
import {MatFormFieldModule} from '@angular/material/';
import { ViewRolesComponent } from './view-roles/view-roles.component';

@NgModule({
  declarations: [UserRolesComponent, ViewRolesComponent],
  imports: [
    CommonModule,MatFormFieldModule
  ],
  exports:[UserRolesComponent]
})
export class UserRolesModule { }
