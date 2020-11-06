import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListViewComponent} from './list-view/list-view.component';
import {CalendarComponent} from './calendar/calendar.component';
import {ProfileComponent} from './profile/profile.component';
import {WorkModeComponent} from './work-mode/work-mode.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'list', component: ListViewComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'work-mode', component: WorkModeComponent},
  { path: '', redirectTo: '/list', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
