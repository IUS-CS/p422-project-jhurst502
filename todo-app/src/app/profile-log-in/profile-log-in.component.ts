import { Component, OnInit } from '@angular/core';
import { ProfileDataService } from '../profile-data.service';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Profile} from "../models/profile";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile-log-in',
  templateUrl: './profile-log-in.component.html',
  styleUrls: ['./profile-log-in.component.scss']
})
export class ProfileLogInComponent implements OnInit {

  model = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl('')
  });
  name: string;
  urgency: number;
  status = '';
  statusIsError = false;

  profile: Profile;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileDataService: ProfileDataService,
  ) { }

  ngOnInit(): void {
  }

  newData(): void {
    const profileData = {
      userName: this.model.value.userName,
      password: this.model.value.password
    };
    this.profile.userName = profileData.userName;
    this.profile.password = profileData.password;
  }
  addProfile(): void {
    const profileData = {
      userName: this.model.value.userName,
      password: this.model.value.password
    };

    const profile = new Profile(profileData.userName, profileData.password);

    console.log(profile);
    // this.profile.userName = profileData.userName;
    // this.profile.password = profileData.password;
    this.profileDataService.add(profile)
      .subscribe(
        next => {
          this.status = 'Saved!';
          this.statusIsError = false;
        },
        err => {
          this.status = err;
          this.statusIsError = true;
        }
      );
    this.model.reset();
  }

  signIn(password: string): void {
    this.profileDataService.getProfile(this.model.value.userName)
      .subscribe(
        next => {
          this.status = 'Found';
          this.statusIsError = false;
          console.log(next.userName);
          console.log(next.password);
          const foundProfileData = {
            userName: next.userName,
            password: next.password
          };
          if (foundProfileData.password === password) {
            console.log('Account is valid');
          } else {
            console.log('Not valid');
          }
        },
        err => {
          this.status = err;
          this.statusIsError = true;
        }
      );
    this.model.reset();
  }

}
