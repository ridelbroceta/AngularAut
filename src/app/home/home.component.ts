import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

import { BaseChildComponent } from '../_helpers/index';

import { ModeratorService } from  './../_services/index'

@Component({
    //moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent extends BaseChildComponent implements OnInit {
    users: User[] = [];

    constructor(
                private userService: UserService, 
                moderator: ModeratorService
                ) { 
                    super(moderator)
                }

    ngOnInit() {
        // get users from secure api end point
        /*this.userService.getUsers()
            .subscribe(users => {
                this.users = users;
            });*/
    }

}