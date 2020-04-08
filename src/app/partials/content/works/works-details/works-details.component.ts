import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ApiService } from '../../../../shared/services/api.service';

@Component({
  selector: 'pfo-works-details',
  templateUrl: './works-details.component.html',
  styleUrls: ['./works-details.component.scss']
})
export class WorksDetailsComponent implements OnInit {

  @Output() detailsClose = new EventEmitter();
  @Input('work') work: any;

  isActive : boolean = true;
  skills : string[] = [];

  constructor(private _http:ApiService) { }

  ngOnInit(){
    this._http.getSkills()
      .subscribe((datas) => {
        this.getWorkSkills(datas);
    });
    this.scrollTop();
  }

  getWorkSkills(datas){
    this.work.skills.forEach((workSkill) => {
      datas.forEach((skill) => {
        if (workSkill === skill.id){
          this.skills.push(skill);
        }
      })
    });
  }

  closeDetails(){
    this.isActive = false;
    setTimeout(() => {
      this.scrollTop();
      this.detailsClose.emit();
    }, 500);
  }

  scrollTop() {
    window.scroll(0,0);
  }
}
