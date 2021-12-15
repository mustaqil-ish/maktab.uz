import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarsDeleteDialogComponent } from './dars-delete-dialog.component';

describe('DarsDeleteDialogComponent', () => {
  let component: DarsDeleteDialogComponent;
  let fixture: ComponentFixture<DarsDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarsDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarsDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
