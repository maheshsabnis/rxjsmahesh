import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { EmployeefilterComponent } from './app/employeefilter/employeefilter.component';
import { TakeComponent } from './app/take/take.component';
import { SubjectComponent } from './app/subject/subject.component';
import { BehaviorsubjectComponent } from './app/behaviorsubject/behaviorsubject.component';

bootstrapApplication(BehaviorsubjectComponent, appConfig)
  .catch((err) => console.error(err));
