import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageStatusComponent } from './manage-status.component';

@NgModule({
  declarations: [ManageStatusComponent],
  imports: [
    CommonModule
  ],
  exports : [ManageStatusComponent]
})
export class ManageStatusModule { }
