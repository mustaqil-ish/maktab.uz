import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialogTograkComponent } from './delete-dialog-tograk.component';

describe('DeleteDialogTograkComponent', () => {
  let component: DeleteDialogTograkComponent;
  let fixture: ComponentFixture<DeleteDialogTograkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDialogTograkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDialogTograkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
