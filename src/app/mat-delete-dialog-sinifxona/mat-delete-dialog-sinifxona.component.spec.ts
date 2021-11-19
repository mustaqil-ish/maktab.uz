import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDeleteDialogSinifxonaComponent } from './mat-delete-dialog-sinifxona.component';

describe('MatDeleteDialogSinifxonaComponent', () => {
  let component: MatDeleteDialogSinifxonaComponent;
  let fixture: ComponentFixture<MatDeleteDialogSinifxonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDeleteDialogSinifxonaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDeleteDialogSinifxonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
