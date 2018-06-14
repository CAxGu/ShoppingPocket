import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordrecoveryComponent } from './changepasswordrecovery.component';

describe('ChangepasswordrecoveryComponent', () => {
  let component: ChangepasswordrecoveryComponent;
  let fixture: ComponentFixture<ChangepasswordrecoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepasswordrecoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordrecoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
