import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndeedComponent } from './indeed.component';

describe('IndeedComponent', () => {
  let component: IndeedComponent;
  let fixture: ComponentFixture<IndeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
