import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCustomerComponent } from './show-customer.component';

describe('ShowCustomerComponent', () => {
  let component: ShowCustomerComponent;
  let fixture: ComponentFixture<ShowCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
