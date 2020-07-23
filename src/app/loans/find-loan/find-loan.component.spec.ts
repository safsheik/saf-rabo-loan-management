import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindLoanComponent } from './find-loan.component';

describe('FindLoanComponent', () => {
  let component: FindLoanComponent;
  let fixture: ComponentFixture<FindLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
