import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { LoaderService } from '../../../shared/services/loader.service';

@Component({
  selector: 'pfo-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {

  isDetails: boolean = false;
  title:string;
  description:string;
  works:any;
  currentWork:any;

  constructor(private _http:ApiService,
              public loaderService:LoaderService) { }

  ngOnInit(){
    this._http.getPages()
      .subscribe((datas) => {
        this.getWorksFields(datas);
    });
    this._http.getWorks()
      .subscribe((datas) => {
        this.works = datas;
        if (this.loaderService) this.loaderService.setLoading(false);
    });
    this.scrollTop();
  }

  getWorksFields(datas:any){
    datas.forEach(page => {
      if(page.slug === 'works'){
        this.title = page.title.rendered;
        this.description = page.content.rendered;
      }
    });
  }

  openDetails(work:any){
    this.currentWork = work;
    this.isDetails = true;
  }

  closeDetails() {
    this.isDetails = false;
  }

  scrollTop() {
    window.scroll(0,0);
  }
}
