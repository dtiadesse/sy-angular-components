import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DosHeaderComponent } from './dos-header.component';

describe('DosHeaderComponent', () => {
  let component: DosHeaderComponent;
  let fixture: ComponentFixture<DosHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DosHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
