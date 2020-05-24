import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedInFormComponent } from './linked-in-form.component';

describe('LinkedInFormComponent', () => {
  let component: LinkedInFormComponent;
  let fixture: ComponentFixture<LinkedInFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkedInFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkedInFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
