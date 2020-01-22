import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AskqueryComponent } from './askquery.component';

describe('AskqueryComponent', () => {
  let component: AskqueryComponent;
  let fixture: ComponentFixture<AskqueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AskqueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AskqueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
