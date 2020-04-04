import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';

@Component({
  selector: 'pfo-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  title : string;
  description : string;
  skills : any;

  constructor(private _http:ApiService) { }

  ngOnInit(): void {

    this._http.getPages()
      .subscribe((datas) => {
      this.getSkillsFields(datas);
    });

    this._http.getSkills()
      .subscribe((datas) => {
        this.skills = datas;
    });
  }

  getSkillsFields(datas:any){
    datas.forEach(page => {
      if(page.slug === 'skills'){
        this.title = page.acf.skill_title;
        this.description = page.acf.skill_description;
      }
    });
  }
  
}
