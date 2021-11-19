import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDeleteDialogOqtuvchiComponent } from './mat-delete-dialog-oqtuvchi.component';

describe('MatDeleteDialogOqtuvchiComponent', () => {
  let component: MatDeleteDialogOqtuvchiComponent;
  let fixture: ComponentFixture<MatDeleteDialogOqtuvchiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDeleteDialogOqtuvchiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDeleteDialogOqtuvchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
