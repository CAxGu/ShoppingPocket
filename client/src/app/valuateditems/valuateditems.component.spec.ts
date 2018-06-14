import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuateditemsComponent } from './valuateditems.component';

describe('ValuateditemsComponent', () => {
  let component: ValuateditemsComponent;
  let fixture: ComponentFixture<ValuateditemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuateditemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuateditemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
