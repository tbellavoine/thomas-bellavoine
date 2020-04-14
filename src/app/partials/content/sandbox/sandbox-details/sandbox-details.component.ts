import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { ApiService } from '../../../../shared/services/api.service';

@Component({
  selector: 'pfo-sandbox-details',
  templateUrl: './sandbox-details.component.html',
  styleUrls: ['./sandbox-details.component.scss']
})
export class SandboxDetailsComponent implements OnInit {

  @Output() detailsClose = new EventEmitter();
  @Input('playground') playground: any;

  isActive : boolean = true;
  skills : string[] = [];

  constructor(private _http:ApiService) { }

  ngOnInit(){
    this._http.getSkills()
      .subscribe((datas) => {
        this.getPlaygroundSkills(datas);
    });
    this.scrollTop();
  }

  getPlaygroundSkills(datas){
    this.playground.skills.forEach((playgroundSkill) => {
      datas.forEach((skill) => {
        if (playgroundSkill === skill.id){
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
