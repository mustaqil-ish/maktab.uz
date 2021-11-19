import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FanDeleteDialogComponent } from './fan-delete-dialog.component';

describe('FanDeleteDialogComponent', () => {
  let component: FanDeleteDialogComponent;
  let fixture: ComponentFixture<FanDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FanDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FanDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
