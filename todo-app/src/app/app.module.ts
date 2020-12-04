import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './calendar/calendar.component';
import { ListViewComponent } from './list-view/list-view.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkModeComponent } from './work-mode/work-mode.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NewTaskDropdownComponent } from './new-task-dropdown/new-task-dropdown.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ProfileLogInComponent } from './profile-log-in/profile-log-in.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { CountdownModule } from 'ngx-countdown';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    ListViewComponent,
    ProfileComponent,
    WorkModeComponent,
    PageNotFoundComponent,
    NewTaskDropdownComponent,
    TaskFormComponent,
    DatepickerComponent,
    ProfileLogInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    NoopAnimationsModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
