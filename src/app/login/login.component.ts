import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

import { AuthenticationService } from '../_services/index';
import { EnterpriseConnect } from '../_models/index';


@Component({
    //moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    error = '';
    //enterpriseConnect: EnterpriseConnect;
    trustedUrl : SafeUrl;


    constructor(
        private sanitizer: DomSanitizer,
        private router: Router,
        private authenticationService: AuthenticationService) { 
           // this.enterpriseConnect = new EnterpriseConnect('ridel', '');
        }

    ngOnInit() {
        // reset login status
       // this.authenticationService.logout();

      this.authenticationService.getEnterpriseConnect()
            .subscribe(result => {

                console.log(result)
               // this.enterpriseConnect.baseUrl = result.BaseUrl;
                //this.enterpriseConnect.secret = result.Secret;
                this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(result.BaseUrl + '?secret=' + result.Secret + '&copyright=false');
            });

    }

   /* login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }*/
}
