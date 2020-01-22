import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfunctionComponent } from './adminfunction.component';

describe('AdminfunctionComponent', () => {
  let component: AdminfunctionComponent;
  let fixture: ComponentFixture<AdminfunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminfunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminfunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
