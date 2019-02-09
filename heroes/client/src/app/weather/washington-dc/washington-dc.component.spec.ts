import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingtonDCComponent } from './washington-dc.component';

describe('WashingtonDCComponent', () => {
  let component: WashingtonDCComponent;
  let fixture: ComponentFixture<WashingtonDCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashingtonDCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingtonDCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
