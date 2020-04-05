import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'pfo-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  nav : any;

  constructor(private _http:ApiService) { }

  ngOnInit(){
    this._http.getNav()
    .subscribe((datas) => {
      this.nav = datas['items'];
    });
  }

}
