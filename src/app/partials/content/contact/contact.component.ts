import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { LoaderService } from '../../../shared/services/loader.service';

@Component({
  selector: 'pfo-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  title : string;
  description : string;
  mail : string;
  facebook : string;
  twitter : string;
  linkedin : string;
  whatsapp : string;
  github : string;
  adress : string;

  constructor(private _http:ApiService,
              public loaderService:LoaderService) { }

  ngOnInit() {
    this._http.getPages()
    .subscribe((datas) => {
      this.getContactFields(datas);
      if (this.loaderService) this.loaderService.setLoading(false);
    });
    this.scrollTop();
  }

  getContactFields(datas:any){
    datas.forEach(page => {
      if(page.slug === 'contact'){
        this.title = page.title.rendered;
        this.description = page.content.rendered;
        this.mail = page.acf.contact_mail;
        this.facebook = page.acf.contact_facebook;
        this.twitter = page.acf.contact_twitter;
        this.linkedin = page.acf.contact_linkedin;
        this.whatsapp = page.acf.contact_whatsapp;
        this.github = page.acf.contact_github;
        this.adress = page.acf.contact_adress;
      }
      
    });
  }

  scrollTop() {
    window.scroll(0,0);
  }

}
