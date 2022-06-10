import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowHintsComponent } from './row-hints.component';

describe('RowHintsComponent', () => {
  let component: RowHintsComponent;
  let fixture: ComponentFixture<RowHintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RowHintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RowHintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
