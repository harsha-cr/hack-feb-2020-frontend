import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageStatusComponent } from './manage-status.component';
import {MatFormFieldModule} from '@angular/material/';
import { ViewStatusComponent } from './view-status/view-status.component';

@NgModule({
  declarations: [ManageStatusComponent, ViewStatusComponent],
  imports: [
    CommonModule, MatFormFieldModule
  ],
  exports : [ManageStatusComponent]
})
export class ManageStatusModule { }
