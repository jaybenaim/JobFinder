import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndeedResultComponent } from './indeed-result.component';

describe('IndeedResultComponent', () => {
  let component: IndeedResultComponent;
  let fixture: ComponentFixture<IndeedResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndeedResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndeedResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
