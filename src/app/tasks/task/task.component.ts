import { Component, OnInit } from '@angular/core';
import {TaskService} from "src/app/shared/task.service";

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private taskservice:TaskService ) { }

  ngOnInit() {
    if(this.taskservice.taskBTN != "Update task")
        this.taskservice.taskBTN= "Add task";
  }

}
