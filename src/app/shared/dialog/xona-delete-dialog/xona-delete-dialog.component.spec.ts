import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XonaDeleteDialogComponent } from './xona-delete-dialog.component';

describe('XonaDeleteDialogComponent', () => {
  let component: XonaDeleteDialogComponent;
  let fixture: ComponentFixture<XonaDeleteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XonaDeleteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XonaDeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
