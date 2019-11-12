import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertFooterComponent } from './alert-footer.component';

describe('AlertFooterComponent', () => {
  let component: AlertFooterComponent;
  let fixture: ComponentFixture<AlertFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
