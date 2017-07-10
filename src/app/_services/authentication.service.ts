import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

//import 'rxjs/add/operator/toPromise';
declare var $ : any;

import { EnterpriseConnect } from '../_models/index';

@Injectable()
export class AuthenticationService {
    public token: string;

    constructor(private http: Http) {
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    /*login(username: string, password: string): Observable<boolean> {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let token = response.json() && response.json().token;
                if (token) {
                    // set token property
                    this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }*/

    login(userName: string, secret_token: string): Observable<boolean> {
        console.log('login service');    
        let headers = new Headers();
        //headers.append('Content-Type', 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        //return this.http.post('http://localhost:16174/api/account/Token',
          //                      JSON.stringify({ UserName: userId, Password: token }),
            //                    {headers: headers})
        return this.http.post('http://localhost:16174/Token',
                                $.param({ grant_type: 'password', username: userName, password: secret_token }),
                                {headers: headers})
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let data = response.json();
                if (data.access_token) {
                    // set token property
                   // this.token = token;

                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', 
                            JSON.stringify({ username: data.userName, 
                                             access_token: data.access_token,
                                             type: data.token_type}));

                    // return true to indicate successful login
                    return true;
                } else {
                    // return false to indicate failed login
                    return false;
                }
            });
    }

    getEnterpriseConnect()  {

            return this.http.get('http://localhost:16174/api/account/keys')
                        .map((response: Response) => response.json())
                        ///...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }


   /* getEnterpriseConnect() {
        return this.http.get('http://localhost:16174/api/account/keys')
                     .toPromise()
                     .then(response => response.json())
                     .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
}*/


    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }
}