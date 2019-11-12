import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DosFooterComponent } from './dos-footer.component';

describe('DosFooterComponent', () => {
  let component: DosFooterComponent;
  let fixture: ComponentFixture<DosFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DosFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
