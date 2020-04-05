import { Component } from '@angular/core';
import { ActionsService } from './shared/services/actions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thomas-bellavoine';
  isactive:boolean;
  
  constructor(public actionService:ActionsService) { }

  isActive(){
    return this.actionService.openMenu;
  }
}
