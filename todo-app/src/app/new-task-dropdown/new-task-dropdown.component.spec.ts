import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaskDropdownComponent } from './new-task-dropdown.component';

describe('NewTaskDropdownComponent', () => {
  let component: NewTaskDropdownComponent;
  let fixture: ComponentFixture<NewTaskDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTaskDropdownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaskDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
