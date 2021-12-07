import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserActivDialogComponent } from './user-activ-dialog.component';

describe('UserActivDialogComponent', () => {
  let component: UserActivDialogComponent;
  let fixture: ComponentFixture<UserActivDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserActivDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserActivDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
