import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Profile } from './models/profile';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileDataService {

  constructor(
    private http: HttpClient
  ) { }
  private url = '/v1/profiles';
  private profileName;

  public setProfileName(userName: string): void {
    this.profileName = userName;
    console.log(`logged in user: ${this.profileName}`);
  }
  public getProfileName(): string {
    return this.profileName;
  }
  public getProfile(userName: string): Observable<Profile> {
    return this.http.get<Profile>(`${this.url}/${userName}`);
  }
  public add(profile: Profile): Observable<any> {
    return this.http.post(this.url, profile);
  }
  public signIn(profile: Profile): Observable<any> {
    return this.http.post(`${this.url}/login`, profile);
  }
}
