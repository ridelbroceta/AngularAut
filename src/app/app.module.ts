import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
//import { fakeBackendProvider } from './_helpers/index';
//import { MockBackend, MockConnection } from '@angular/http/testing';
//import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService, ModeratorService } from './_services/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import { AloneComponent } from './alone/alone.component';
import { CallerComponent } from './caller/caller.component';
import { Header1Component } from './header1/header1.component';
import { Header2Component } from './header2/header2.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeeComponent } from './employee/employee.component';

import { HttpNotFoundComponent } from './http-not-found/http-not-found.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        AloneComponent,
        CallerComponent,
        Header1Component,
        Header2Component,
        NavbarComponent,
        FooterComponent,
        EmployeeComponent,
  
        HttpNotFoundComponent,
  
        MenuComponent
    ],
    providers: [
        ModeratorService,
        AuthGuard,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        //fakeBackendProvider,
        //MockBackend,
        //BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }