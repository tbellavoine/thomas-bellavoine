import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {

  openMenu : boolean = false;
  
  constructor() { }

  toggleMenu(){
    this.openMenu = !this.openMenu;
  }
}
