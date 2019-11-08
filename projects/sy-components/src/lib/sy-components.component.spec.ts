import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SyComponentsComponent } from './sy-components.component';

describe('SyComponentsComponent', () => {
  let component: SyComponentsComponent;
  let fixture: ComponentFixture<SyComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SyComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
