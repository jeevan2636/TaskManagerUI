import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TaskManagerUI';

  routelinks: any[];
  activelinkindex= -1;

  constructor (private router:Router){
    this.routelinks=[
      {
        label: "Add Task",
        link: "./tasks",
        index:0
      },
      {
        label: "View Task",
        link: "./viewtask",
        index:1
      }

    ];
  }

}
