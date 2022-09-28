import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HOMECOMPONENT } from './home.component';

describe('HOMECOMPONENT', () => {
  let component: HOMECOMPONENT;
  let fixture: ComponentFixture<HOMECOMPONENT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HOMECOMPONENT ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HOMECOMPONENT);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
