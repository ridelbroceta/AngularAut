import { Component, OnInit, AfterViewInit} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';

import { ModeratorService } from  './../_services/index'

import { AuthenticationService } from '../_services/index';
import { AuthenticationToken } from '../_models/index';

declare var $ : any;

@Component({
    //moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit, AfterViewInit {
   // model: any = {};
    loading = false;
    error = '';
    //enterpriseConnect: EnterpriseConnect;
    trustedUrl : SafeUrl;
    returnUrl: string;

   // myForm: FormGroup;


    constructor(
        private moderator: ModeratorService,
        private sanitizer: DomSanitizer,
        private router: Router,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService) { 
           // this.enterpriseConnect = new EnterpriseConnect('ridel', '');
        }

    ngOnInit() {
         console.log('Oninit');
        // reset login status
       this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

       //this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl('http://localhost:16174/home/toframe');

      //this.initForm(); 
      /*this.authenticationService.getEnterpriseConnect()
            .subscribe(result => {

                console.log(result)
               // this.enterpriseConnect.baseUrl = result.BaseUrl;
                //this.enterpriseConnect.secret = result.Secret;
                this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(result.BaseUrl + '?secret=' + result.Secret + '&copyright=false');
            });*/

    }


/*initForm() {
    this.myForm = new FormGroup({
        'authenticationToken': new FormControl(), 
        'userId': new FormControl(),
    });
}*/

    ngAfterViewInit(): void {
       console.log('AfterViewInit');

       Promise.resolve(null).then(() => this.moderator.setBodyBackground('radial-gradient(rgb(48, 111, 190) 0%,rgb(227, 235, 245) 100%)'));

     /* if (window.addEventListener) {
            window.addEventListener("message", this.handleEnterpriseConnectFeedback.bind(this), false);
        } else {
            console.log('[Security Service] Unable to attach event listeners for login method.');
        }*/
       
    }

/*onSubmit(){
    console.log('Ok');
}*/

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

   /*login(authToken: AuthenticationToken) {
        this.loading = true;
        this.authenticationService.login(authToken.token, authToken.user)
            .subscribe(result => {
                if (result === true) {
                    this.router.navigate(['/']);
                } else {
                    this.error = 'Username or password is incorrect';
                    this.loading = false;
                }
            });
    }*/

handleEnterpriseConnectFeedback(response: any){
    console.log('login');
    let authToken : AuthenticationToken = new AuthenticationToken('', '', '');
    try {
            if (typeof response === 'string') {
                authToken.token = response;
                authToken.result = 'success';
            } else if (typeof response === 'object' && typeof response.data === 'string') {
                authToken = JSON.parse(response.data);
            } else {
                authToken = response.data;
            };
        } catch (er) {
            //alert('Unable to parse authentication response.');
            authToken = null;
        };

   if (authToken != null) {
    switch (authToken.result) {
            case 'success':
                // result.token now stores the encrypted user information returned by enterise connect.  
                // we need to decrypt that and then finalize the login process
                console.log(authToken)
                this.loading = true;
                this.authenticationService.login(authToken.user, authToken.token)
                    .subscribe(result => {
                        if (result === true) {
                           this.router.navigate([this.returnUrl]);
                        } else {
                            this.error = 'Username or password is incorrect';
                            this.loading = false;
                        }
                    });                
                //this.login(authToken);
                //$('#authenticationToken').val(authToken.token);
                //$('#userId').val(authToken.user);
            
                break;
            case 'failure':
                // unable to authenticate

                break;
            case 'canceled':
                // user cancelled out of dialog
                alert('user cancelled login');
        }
   }     
}

login() {
    let authToken = new  AuthenticationToken('Maxelltdk1234*', 'nbordelon', 'true');
    console.log(authToken)
    this.loading = true;
    this.authenticationService.login(authToken.user, authToken.token)
        .subscribe(result => {
            if (result === true) {
                this.router.navigate([this.returnUrl]);
            } else {
                this.error = 'Username or password is incorrect';
                this.loading = false;
            }
        });                
    
}

}
