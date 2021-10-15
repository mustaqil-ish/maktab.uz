import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TogarakComponent } from './togarak.component';

describe('TogarakComponent', () => {
  let component: TogarakComponent;
  let fixture: ComponentFixture<TogarakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TogarakComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TogarakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
