import { Component, OnInit } from '@angular/core';
import {ProfileDataService} from '../profile-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userName: string;
  constructor(
    private profileService: ProfileDataService
  ) { }

  ngOnInit(): void {
    this.userName = this.profileService.getProfileName();
  }

}
