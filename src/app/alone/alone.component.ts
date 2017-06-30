import { Component, OnInit } from '@angular/core';

import { ModeratorService } from './../_services/index';

@Component({
  selector: 'app-alone',
  templateUrl: './alone.component.html',
  styleUrls: ['./alone.component.css']
})
export class AloneComponent implements OnInit {

  constructor(private moderator: ModeratorService) { }

  ngOnInit() {
    this.moderator.alone();
  }

}
