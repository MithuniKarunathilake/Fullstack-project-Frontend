import { Routes } from '@angular/router';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ManageUserComponent } from './pages/manage-user/manage-user.component';

export const routes: Routes = [
    {
        path:"",
        component:DashboardComponent
    },
    {
        path:"add-user",
        component:AddUserComponent
    },
    {
        path:"manage-user",
        component:ManageUserComponent
    }
];
