import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UqituvchilarComponent } from './uqituvchilar.component';

describe('UqituvchilarComponent', () => {
  let component: UqituvchilarComponent;
  let fixture: ComponentFixture<UqituvchilarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UqituvchilarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UqituvchilarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
