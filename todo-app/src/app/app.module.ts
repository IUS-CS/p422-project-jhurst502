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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
