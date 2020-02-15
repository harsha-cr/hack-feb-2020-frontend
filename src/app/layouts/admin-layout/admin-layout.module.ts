import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { UserRolesComponent } from 'app/pages/user-roles/user-roles.component';
import { UserDesignationComponent } from 'app/pages/user-designation/user-designation.component';
import { ManageStatusComponent } from 'app/pages/manage-status/manage-status.component';
import { UserProfileComponent } from 'app/pages/user-profile/user-profile.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    UserRolesComponent,
    UserDesignationComponent,
    ManageStatusComponent,
    TableListComponent,
    NotificationsComponent,

  ]
})

export class AdminLayoutModule {}
