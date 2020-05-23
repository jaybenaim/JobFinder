import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedJobResultComponent } from './saved-job-result.component';

describe('SavedJobResultComponent', () => {
  let component: SavedJobResultComponent;
  let fixture: ComponentFixture<SavedJobResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedJobResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedJobResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
