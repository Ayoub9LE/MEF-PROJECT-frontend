import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mef_concours_project';
  //Sidebar toggle show hide function
status = false;
addToggle()
{
  this.status = !this.status;       
}
}
