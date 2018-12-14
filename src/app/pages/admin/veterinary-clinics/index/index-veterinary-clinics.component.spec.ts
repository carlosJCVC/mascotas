import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexVeterinaryClinicsComponent } from './index-veterinary-clinics.component';

describe('IndexVeterinaryClinicsComponent', () => {
  let component: IndexVeterinaryClinicsComponent;
  let fixture: ComponentFixture<IndexVeterinaryClinicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexVeterinaryClinicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexVeterinaryClinicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
