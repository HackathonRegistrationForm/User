import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewrecordComponent } from './viewrecord.component';

describe('ViewrecordComponent', () => {
  let component: ViewrecordComponent;
  let fixture: ComponentFixture<ViewrecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewrecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewrecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
