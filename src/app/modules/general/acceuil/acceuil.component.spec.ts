import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ACCEUILCOMPONENT } from './acceuil.component';

describe('ACCEUILCOMPONENT', () => {
  let component: ACCEUILCOMPONENT;
  let fixture: ComponentFixture<ACCEUILCOMPONENT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ACCEUILCOMPONENT ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ACCEUILCOMPONENT);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
