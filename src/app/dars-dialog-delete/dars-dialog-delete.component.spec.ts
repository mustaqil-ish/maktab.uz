import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarsDialogDeleteComponent } from './dars-dialog-delete.component';

describe('DarsDialogDeleteComponent', () => {
  let component: DarsDialogDeleteComponent;
  let fixture: ComponentFixture<DarsDialogDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarsDialogDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DarsDialogDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
