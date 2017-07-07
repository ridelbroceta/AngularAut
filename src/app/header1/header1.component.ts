import { Component, OnInit, AfterViewInit } from '@angular/core';

import { ModeratorService } from './../_services/index'

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component implements OnInit, AfterViewInit {

  constructor(private moderator: ModeratorService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    Promise.resolve(null).then(() => this.moderator.setPaddingTop('100px'));
  }

}
