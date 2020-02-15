import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormField,  MatSelectModule, MatDatepickerModule, MatIconModule } from '@angular/material';
import { UserProfileComponent } from './user-profile.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [
    CommonModule, FormsModule, MatInputModule, MatFormField, MatSelectModule, MatDatepickerModule, MatIconModule
  ],
  exports : [UserProfileComponent]
})
export class UserProfileModule { }
