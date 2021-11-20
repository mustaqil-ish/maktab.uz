import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UquvYiliComponent } from './uquv-yili.component';

describe('UquvYiliComponent', () => {
  let component: UquvYiliComponent;
  let fixture: ComponentFixture<UquvYiliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UquvYiliComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UquvYiliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
