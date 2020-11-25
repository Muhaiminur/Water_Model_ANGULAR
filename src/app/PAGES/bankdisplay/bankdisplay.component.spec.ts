import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdisplayComponent } from './bankdisplay.component';

describe('BankdisplayComponent', () => {
  let component: BankdisplayComponent;
  let fixture: ComponentFixture<BankdisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankdisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
