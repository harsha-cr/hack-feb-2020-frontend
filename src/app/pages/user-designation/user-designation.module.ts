import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDesignationComponent } from './user-designation.component';

@NgModule({
  declarations: [UserDesignationComponent],
  imports: [
    CommonModule
  ],
  exports:[UserDesignationComponent]
})
export class UserDesignationModule { }
