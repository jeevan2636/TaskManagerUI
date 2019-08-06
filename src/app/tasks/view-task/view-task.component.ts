import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {TaskService} from 'src/app/shared/task.service';
@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {

  constructor(private taskservice:TaskService, 
  private router: Router 
  ) { }

  ngOnInit() {
  }
  editTask() 
  {
    this.taskservice.taskBTN= "Update task";
    this.router.navigateByUrl('/tasks');
  }

}
