import { Injectable } from '@angular/core';
import { AppComponent } from './../app.component'


@Injectable()
export class ModeratorService {

  public principalComponent: AppComponent;

  constructor() { }

  setPrincipalComponent(principal: AppComponent){
    this.principalComponent = principal;
  }


  alone(){
   // this.principalComponent.pageNormal = false;
  }

  normal(){
   // this.principalComponent.pageNormal = true;
  }

}
