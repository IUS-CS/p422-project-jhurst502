import {Component} from '@angular/core';
import {ProfileDataService} from './profile-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';

  constructor(
    private profileService: ProfileDataService
  ) {
  }

  logOut(): void {
    console.log(this.profileService.getProfileName());
    this.profileService.setProfileName('');
    console.log(this.profileService.getProfileName());
  }
}
