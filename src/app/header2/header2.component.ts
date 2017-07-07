import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ModeratorService } from './../_services/index'


@Component({
  selector: 'app-header2',
  templateUrl: './header2.component.html',
  styleUrls: ['./header2.component.css']
})
export class Header2Component implements OnInit, AfterViewInit {

  constructor(private moderator: ModeratorService) { }

  ngOnInit() {

     
  }

 ngAfterViewInit() {
        Promise.resolve(null).then(() => this.moderator.setPaddingTop('200px'));
    }
}
