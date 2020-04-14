import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { LoaderService } from '../../../shared/services/loader.service';

@Component({
  selector: 'pfo-sandbox',
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.scss']
})
export class SandboxComponent implements OnInit {

  isDetails: boolean = false;
  title:string;
  description:string;
  playgrounds:any;
  currentPlayground:any;

  constructor(private _http:ApiService,
              public loaderService:LoaderService) { }

  ngOnInit(){
    this._http.getPages()
      .subscribe((datas) => {
        this.getPlaygroundsFields(datas);
    });
    this._http.getPlaygrounds()
      .subscribe((datas) => {
        this.playgrounds = datas;
        if (this.loaderService) this.loaderService.setLoading(false);
    });
    this.scrollTop();
  }

  getPlaygroundsFields(datas:any){
    datas.forEach(page => {
      if(page.slug === 'sandbox'){
        this.title = page.title.rendered;
        this.description = page.content.rendered;
      }
    });
  }

  openDetails(playground:any){
    this.currentPlayground = playground;
    this.isDetails = true;
  }

  closeDetails() {
    this.isDetails = false;
  }

  scrollTop() {
    window.scroll(0,0);
  }

}
