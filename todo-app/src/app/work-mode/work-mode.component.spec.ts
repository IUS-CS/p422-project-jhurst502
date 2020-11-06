import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkModeComponent } from './work-mode.component';

describe('WorkModeComponent', () => {
  let component: WorkModeComponent;
  let fixture: ComponentFixture<WorkModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkModeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
