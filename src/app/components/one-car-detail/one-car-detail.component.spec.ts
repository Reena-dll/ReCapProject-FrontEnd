import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneCarDetailComponent } from './one-car-detail.component';

describe('OneCarDetailComponent', () => {
  let component: OneCarDetailComponent;
  let fixture: ComponentFixture<OneCarDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneCarDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneCarDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
