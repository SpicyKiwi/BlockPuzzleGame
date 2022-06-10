import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnHintsComponent } from './column-hints.component';

describe('ColumnHintsComponent', () => {
  let component: ColumnHintsComponent;
  let fixture: ComponentFixture<ColumnHintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnHintsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColumnHintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
