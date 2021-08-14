import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HogwartsAppComponent } from './hogwarts-app.component';

describe('HogwartsAppComponent', () => {
  let component: HogwartsAppComponent;
  let fixture: ComponentFixture<HogwartsAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HogwartsAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HogwartsAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
