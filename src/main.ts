import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { EmployeefilterComponent } from './app/employeefilter/employeefilter.component';
import { TakeComponent } from './app/take/take.component';

bootstrapApplication(TakeComponent, appConfig)
  .catch((err) => console.error(err));
