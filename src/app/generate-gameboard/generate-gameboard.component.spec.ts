import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateGameboardComponent } from './generate-gameboard.component';

describe('GenerateGameboardComponent', () => {
  let component: GenerateGameboardComponent;
  let fixture: ComponentFixture<GenerateGameboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenerateGameboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenerateGameboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
