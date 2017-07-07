import { Injectable } from '@angular/core';
import { AppComponent } from './../app.component'


@Injectable()
export class ModeratorService {

  private principalComponent: AppComponent;

  constructor() { }

  setPrincipalComponent(principal: AppComponent){
    this.principalComponent = principal;
  }

  setPaddingTop(value: string) {
    this.principalComponent.setPaddingTop(value);
  }

  setBodyBackground(value: string) {
    this.principalComponent.setBodyBackground(value);
  }

  alone(){
   // this.principalComponent.pageNormal = false;
  }

  normal(){
   // this.principalComponent.pageNormal = true;
  }

}
