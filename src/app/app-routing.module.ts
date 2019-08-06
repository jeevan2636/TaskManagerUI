import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TasksComponent} from './tasks/tasks.component';
import { ViewTaskComponent} from './tasks/view-task/view-task.component';

const routes: Routes = [
{
path: "",
redirectTo:'/tasks',
pathMatch: 'full'
},
{
path:'tasks',
component:TasksComponent,
},
{
path:'viewtask',
component:ViewTaskComponent,
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
