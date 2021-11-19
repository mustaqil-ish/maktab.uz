import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinfxonaComponent } from './sinfxona.component';

describe('SinfxonaComponent', () => {
  let component: SinfxonaComponent;
  let fixture: ComponentFixture<SinfxonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinfxonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinfxonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
