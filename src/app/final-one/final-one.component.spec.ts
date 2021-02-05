import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalOneComponent } from './final-one.component';

describe('FinalOneComponent', () => {
  let component: FinalOneComponent;
  let fixture: ComponentFixture<FinalOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
