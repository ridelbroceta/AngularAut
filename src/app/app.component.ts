import { Component, OnInit, AfterViewInit, HostBinding} from '@angular/core';

import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { ModeratorService } from './_services/index';


@Component({
    //moduleId: module.id,
    selector: 'body',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit, AfterViewInit{ 

    @HostBinding('style.background') 
    background: any;

    public paddingTop: string = '100px';
   

    constructor(
        private moderator: ModeratorService,
        private sanitizer: DomSanitizer
        ) { }


    ngOnInit(): void {
        console.log('App Component: ' + Date.now());    
        this.moderator.setPrincipalComponent(this) ;
    }

    ngAfterViewInit(): void {
        //this.cd.detectChanges();
    }

    setPaddingTop(value: string) {
        this.paddingTop = value;
    }

    setBodyBackground(value: string) {
        this.background = this.transform(value);
    }
    

    transform(style) {
        return this.sanitizer.bypassSecurityTrustStyle(style);
    }
}