import { Component, OnInit } from '@angular/core';

import { ModeratorService } from './_services/index';


@Component({
    //moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit{ 
  

    constructor(private moderator: ModeratorService) { }


    ngOnInit(): void {
        //this.moderator.principalComponent = this;
    }

  
}