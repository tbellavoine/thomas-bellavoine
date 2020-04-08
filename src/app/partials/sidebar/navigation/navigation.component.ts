import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { ActionsService } from '../../../shared/services/actions.service';

@Component({
  selector: 'pfo-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  @ViewChild('menuIconToggle') iconToggle : ElementRef;

  nav : any;

  constructor(private _http:ApiService,
              public actionService:ActionsService) { }

  ngOnInit(){
    this._http.getNav()
    .subscribe((datas) => {
      this.nav = datas['items'];
    });
  }

  ngAfterViewInit(){
    this.iconToggle.nativeElement.addEventListener('click', () => {
      this.actionService.toggleMenu();
    })
  }
  
}
