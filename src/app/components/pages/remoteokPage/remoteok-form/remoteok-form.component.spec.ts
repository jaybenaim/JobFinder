import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoteokFormComponent } from './remoteok-form.component';

describe('RemoteokFormComponent', () => {
  let component: RemoteokFormComponent;
  let fixture: ComponentFixture<RemoteokFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemoteokFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoteokFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
