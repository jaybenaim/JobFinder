import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarResultComponent } from './search-bar-result.component';

describe('SearchBarResultComponent', () => {
  let component: SearchBarResultComponent;
  let fixture: ComponentFixture<SearchBarResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
