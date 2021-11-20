import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDeleteUquchiComponent } from './mat-delete-uquchi.component';

describe('MatDeleteUquchiComponent', () => {
  let component: MatDeleteUquchiComponent;
  let fixture: ComponentFixture<MatDeleteUquchiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatDeleteUquchiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDeleteUquchiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
