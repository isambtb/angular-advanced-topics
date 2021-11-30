import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang-pipes-playground';
  count = 340040;
  date = '2021-12-07T00:00:00Z ';
  today = Date.now() 
  name = 'IssaM';
  name1= 'najib';
}
