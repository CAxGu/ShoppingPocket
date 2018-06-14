import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatpanelComponent } from './catpanel.component';

describe('CatpanelComponent', () => {
  let component: CatpanelComponent;
  let fixture: ComponentFixture<CatpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
