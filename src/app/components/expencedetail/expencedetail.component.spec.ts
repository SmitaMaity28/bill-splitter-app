import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpencedetailComponent } from './expencedetail.component';

describe('ExpencedetailComponent', () => {
  let component: ExpencedetailComponent;
  let fixture: ComponentFixture<ExpencedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpencedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpencedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
