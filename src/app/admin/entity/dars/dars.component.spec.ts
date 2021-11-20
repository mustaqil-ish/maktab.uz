import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarsComponent } from './dars.component';

describe('DarsComponent', () => {
  let component: DarsComponent;
  let fixture: ComponentFixture<DarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
