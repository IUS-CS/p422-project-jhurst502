import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileLogInComponent } from './profile-log-in.component';

describe('ProfileLogInComponent', () => {
  let component: ProfileLogInComponent;
  let fixture: ComponentFixture<ProfileLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileLogInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
