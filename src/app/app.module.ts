import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TaskComponent } from './tasks/task/task.component';
import { ViewTaskComponent } from './tasks/view-task/view-task.component';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatTabsModule, MatDatepickerModule, MatNativeDateModule,MatButtonModule, MatFormFieldModule,MatInputModule } from '@angular/material';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap/modal/modal.module';
import {TaskService } from './shared/task.service';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TaskComponent,
    ViewTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule, MatDatepickerModule, MatNativeDateModule,MatButtonModule, MatFormFieldModule,MatInputModule,
    NgbModule.forRoot(),
  ],
  exports:
  [
    MatButtonModule, MatFormFieldModule,MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
