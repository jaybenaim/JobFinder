import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveJobComponent } from './save-job.component';

describe('SaveJobComponent', () => {
  let component: SaveJobComponent;
  let fixture: ComponentFixture<SaveJobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveJobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
