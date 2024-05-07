import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddfriendsComponent } from './addfriends.component';

describe('AddfriendsComponent', () => {
  let component: AddfriendsComponent;
  let fixture: ComponentFixture<AddfriendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddfriendsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddfriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
