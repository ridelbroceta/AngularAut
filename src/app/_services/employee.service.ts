import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'

import { Employee } from '../_models/index';

@Injectable()
export class EmployeeService {

    constructor(
        private http: Http) {
    }

    getEmployees(): Observable<Employee[]> {
        // add authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        let headers = new Headers({ 'Authorization': currentUser.type + ' ' + currentUser.access_token });
        let options = new RequestOptions({ headers: headers });

        // get users from api
        return this.http.get('http://localhost:16174/api/employee/list', options)
            .map((response: Response) => response.json());
    }

}
