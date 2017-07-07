import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AuthGuard } from './_guards/index';

import { AloneComponent } from './alone/index';
import { CallerComponent } from './caller/index';

import { Header1Component } from './header1/header1.component';
import { Header2Component } from './header2/header2.component';

import { FooterComponent } from './footer/footer.component';

import { EmployeeComponent } from './employee/employee.component';
import { HttpNotFoundComponent } from './http-not-found/http-not-found.component';

import { MenuComponent } from './menu/menu.component';


/*const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'alone', component: AloneComponent },
    { path: 'caller', component: CallerComponent },
   // { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: '', component: HomeComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];*/


const appRoutes: Routes = [
  { path: '', children:[
     { path: 'login', component: LoginComponent},
     { path: 'home', component: HomeComponent},
     { path: 'caller', component: CallerComponent},
     { path: '', component: HomeComponent},
     { path: '' , component: Header1Component, outlet: 'header'},
     { path: '' , component: FooterComponent, outlet: 'footer'}
  ]},
  { path: '', children:[
     { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
     { path: '' , component: Header2Component, outlet: 'header'},
     { path: '' , component: FooterComponent, outlet: 'footer'},
  ]},
  { path: '**', component: HttpNotFoundComponent },
];


export const routing = RouterModule.forRoot(appRoutes);