import { Component, OnInit } from '@angular/core';
import { slideInAnimation } from '../../animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'pfo-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class ContentComponent implements OnInit {

  constructor() { }

  ngOnInit(){
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
