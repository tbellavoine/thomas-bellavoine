import { Component, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { LoaderService } from '../../../shared/services/loader.service';

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

  constructor(private _http:ApiService,
              public loaderService:LoaderService) {}

  ngOnInit(){
    this._http.getPages()
      .subscribe((datas) => {
        this.getHomeFields(datas);
        setTimeout(() => {
          this.loaderService.setLoading();
        }, 2000);
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
