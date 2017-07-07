import { AfterViewInit } from '@angular/core';

import { ModeratorService } from  './../_services/index'

export  abstract class  BaseChildComponent implements AfterViewInit{


 constructor(
                private moderator: ModeratorService,
            ) {}

    ngAfterViewInit(): void {
       Promise.resolve(null).then(() => this.moderator.setBodyBackground('white'));
    }

}
