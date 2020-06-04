import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCointainerComponent } from './main-cointainer.component';

describe('MainCointainerComponent', () => {
  let component: MainCointainerComponent;
  let fixture: ComponentFixture<MainCointainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCointainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCointainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
