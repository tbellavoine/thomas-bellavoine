import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading:boolean = true;

  constructor() { }

  setLoading(load:boolean){
    if (this.isLoading){
      document.getElementById('loader').animate([
        { opacity: 1 }, 
        { opacity: 0 }
      ], { 
        duration: 300,
      });
      setTimeout(() => {  
        this.isLoading = load;
      }, 200);
    }else{
      this.isLoading = load;
    }
   
  }
}
