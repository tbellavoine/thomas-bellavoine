import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  getPages(){
    return this.http.get('http://localhost/thomas-bellavoine/wordpress/wp-json/wp/v2/pages');
  }

  getWorks(){
    return this.http.get('http://localhost/thomas-bellavoine/wordpress/wp-json/wp/v2/projects?_embed&per_page=100');
  }

  getSkills(){
    return this.http.get('http://localhost/thomas-bellavoine/wordpress/wp-json/wp/v2/skills?per_page=100');
  }

  getNav(){
    return this.http.get('http://localhost/thomas-bellavoine/wordpress/wp-json/menus/v1/menus/topnav');
  }
}
