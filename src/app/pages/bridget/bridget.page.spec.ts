import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgetPage } from './bridget.page';

describe('BridgetPage', () => {
  let component: BridgetPage;
  let fixture: ComponentFixture<BridgetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BridgetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BridgetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
