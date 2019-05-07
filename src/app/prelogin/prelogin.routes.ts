import {RouterModule, Routes, Router} from '@angular/router';

import {PreloginComponent } from './prelogin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const preloginRoutes :Routes= [

    {
        path:'',
        component : PreloginComponent,
        children : [
             {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path : 'login',
                component : LoginComponent
            },
            {
                path:'register',
                component :RegisterComponent
            }
        ]
    }
];

export const PreloginRouting = RouterModule.forChild(preloginRoutes);