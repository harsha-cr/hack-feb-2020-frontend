import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDesignationComponent } from './user-designation.component';
import {MatFormFieldModule} from '@angular/material/';
import { ViewDesignationComponent } from './view-designation/view-designation.component';
@NgModule({
  declarations: [UserDesignationComponent, ViewDesignationComponent],
  imports: [
    CommonModule, MatFormFieldModule
  ],
  exports:[UserDesignationComponent]
})
export class UserDesignationModule { }
