import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { LoaderService } from '../../../shared/services/loader.service';

@Component({
  selector: 'pfo-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title : string;
  description : string;
  birthdate : string;
  age : string;
  adress : string;
  degree : string;
  school : string;
  mail : string;
  cv : string;
  contact : string;

  constructor(private _http:ApiService,
              public loaderService:LoaderService) { }

  ngOnInit(){
    this._http.getPages()
    .subscribe((datas) => {
      this.getAboutFields(datas);
      if (this.loaderService) this.loaderService.setLoading(false);
    });
    this.scrollTop();
  }

  getAboutFields(datas:any){
    datas.forEach(page => {
      if(page.slug === 'about'){
        this.title = page.acf.about_html_title;
        this.description = page.content.rendered;
        this.birthdate = page.acf.about_birthdate;
        this.age = page.acf.about_age;
        this.adress = page.acf.about_adress;
        this.degree = page.acf.about_degree;
        this.school = page.acf.about_school;
        this.mail = page.acf.about_mail;
        this.cv = page.acf.about_cv;
        this.contact = page.acf.about_contact;
      }
    });
  }

  scrollTop() {
    window.scroll(0,0);
  }
}
