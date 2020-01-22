import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeetaskComponent } from './employeetask.component';

describe('EmployeetaskComponent', () => {
  let component: EmployeetaskComponent;
  let fixture: ComponentFixture<EmployeetaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeetaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
