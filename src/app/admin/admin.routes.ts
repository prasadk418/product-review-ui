import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin.component';
import { AddproductsComponent } from './addproducts/addproducts.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const adminRoutes: Routes = [
    {
        path :'',
        component : AdminComponent,
        children:[
            {
                path :'',
                redirectTo : 'dashboard',
                pathMatch:'full'
            },
            {
                path :'dashboard',
                component : DashboardComponent,                
            },
             {
                path : 'add',
                component : AddproductsComponent
            }                    
        ]               
    }
];

export const AdminRouting = RouterModule.forChild(adminRoutes);