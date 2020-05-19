import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndeedPaginationComponent } from './indeed-pagination.component';

describe('IndeedPaginationComponent', () => {
  let component: IndeedPaginationComponent;
  let fixture: ComponentFixture<IndeedPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndeedPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndeedPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
