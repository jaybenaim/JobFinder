import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarFilterComponent } from './search-bar-filter.component';

describe('SearchBarFilterComponent', () => {
  let component: SearchBarFilterComponent;
  let fixture: ComponentFixture<SearchBarFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
