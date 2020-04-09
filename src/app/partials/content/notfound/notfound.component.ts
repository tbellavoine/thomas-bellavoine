import { Component, OnInit} from '@angular/core';
import { LoaderService } from '../../../shared/services/loader.service';

@Component({
  selector: 'pfo-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {

  constructor(public loaderService:LoaderService) { }

  ngOnInit(){
  }

}
