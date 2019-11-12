import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequiredMessageComponent } from './required-message.component';

describe('RequiredMessageComponent', () => {
  let component: RequiredMessageComponent;
  let fixture: ComponentFixture<RequiredMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequiredMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequiredMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
