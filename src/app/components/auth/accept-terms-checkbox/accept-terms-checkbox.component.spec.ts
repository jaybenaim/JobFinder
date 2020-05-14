import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptTermsCheckboxComponent } from './accept-terms-checkbox.component';

describe('AcceptTermsCheckboxComponent', () => {
  let component: AcceptTermsCheckboxComponent;
  let fixture: ComponentFixture<AcceptTermsCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptTermsCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptTermsCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
