import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'laravelAngular';
  data = [];
  profile = [];
  currentUser = localStorage.getItem('currentUser');

  constructor(private http: HttpClient) {
    this.http.get('http://laraveldemo.com/api/sample-restful-apis').subscribe(data => {
    this.data.push(data);
    console.log(this.data);
    }, error => console.error(error));
    this.http.get('http://laraveldemo.com/api/Profile', { responseType: 'text' }).subscribe(data => {
    this.profile.push(data);
    console.log(this.data);
    }, error => console.error(error));
  }
  logout(){
    this.http.get('http://laraveldemo.com/api/logout').subscribe(data => {
      window.location.href = '/login';
      localStorage.setItem('currentUser', '');
      }, error => console.error(error));
  };
}
