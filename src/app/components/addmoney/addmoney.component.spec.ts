import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmoneyComponent } from './addmoney.component';

describe('AddmoneyComponent', () => {
  let component: AddmoneyComponent;
  let fixture: ComponentFixture<AddmoneyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmoneyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
