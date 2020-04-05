import { Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';

declare var CreateSketch : any;

@Component({
  selector: 'pfo-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  @ViewChild('hexagon') hexagonContainer: HTMLElement;
  title : string;
  description : string;
  hexagon: any;

  constructor(private _http:ApiService) {}

  ngOnInit(){
    this._http.getPages()
      .subscribe((datas) => {
        this.getHomeFields(datas);
    });
  }

  ngAfterViewInit() {
    this.hexagon = CreateSketch();
  }

  getHomeFields(datas:any){
    datas.forEach(page => {
      if(page.slug === 'home'){
        this.title = page.acf.home_title;
        this.description = page.acf.home_description;
      }
    });
  }
}
