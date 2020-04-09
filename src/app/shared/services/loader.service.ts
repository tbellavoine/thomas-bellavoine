import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  isLoading:boolean = true;

  constructor() { }

  setLoading(){
    if (this.isLoading){
      document.getElementById('loader').animate([
        { opacity: 1 }, 
        { opacity: 0 }
      ], { 
        duration: 1000,
      });
    }
    setTimeout(() => {  
      this.isLoading = !this.isLoading;
    }, 1000);
  }
}
