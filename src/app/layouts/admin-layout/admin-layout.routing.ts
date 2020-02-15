import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UserProfileComponent } from 'app/pages/user-profile/user-profile.component';
import { UserRolesComponent } from 'app/pages/user-roles/user-roles.component';
import { UserDesignationComponent } from 'app/pages/user-designation/user-designation.component';
import { ManageStatusComponent } from 'app/pages/manage-status/manage-status.component';

export const AdminLayoutRoutes: Routes = [
    
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'user-roles',   component: UserRolesComponent },
    { path: 'user-designation',   component: UserDesignationComponent },
    { path: 'manage-status',   component: ManageStatusComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'notifications',  component: NotificationsComponent },
  
];
