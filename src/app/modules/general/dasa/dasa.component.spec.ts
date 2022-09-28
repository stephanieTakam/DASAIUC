import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DASACOMPONENT } from './dasa.component';

describe('DASACOMPONENT', () => {
  let component: DASACOMPONENT;
  let fixture: ComponentFixture<DASACOMPONENT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DASACOMPONENT ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DASACOMPONENT);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
