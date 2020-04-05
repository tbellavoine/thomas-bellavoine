import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  openMenu : boolean = false;
  constructor() { }

  toggleMenu(){
    console.log('openMenu',this.openMenu);
    this.openMenu = !this.openMenu;
    console.log('openMenu',this.openMenu);

  }
}
