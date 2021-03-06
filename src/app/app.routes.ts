import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
/*import { AdminModule } from './admin/admin.module';*/
import { LoginCheckAuthguard } from './shared/services/logincheck.authguard';


const AppRoutes: Routes=[
    {
        path:'',
       redirectTo:'prelogin',
       pathMatch:'full',              
    },
    {
        path :'prelogin',        
        loadChildren: './prelogin/prelogin.module#PreloginModule'
    },
    {
        path:'admin',        
        loadChildren:'./admin/admin.module#AdminModule',
        canActivate : [LoginCheckAuthguard]
    },
     {
        path:'user',        
        loadChildren:'./user/user.module#UserModule',
        canActivate : [LoginCheckAuthguard]
    }

]

export const AppRouting = RouterModule.forRoot(AppRoutes);

