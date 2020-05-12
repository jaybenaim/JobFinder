import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteokComponent } from './remoteok.component';

describe('RemoteokComponent', () => {
  let component: RemoteokComponent;
  let fixture: ComponentFixture<RemoteokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
