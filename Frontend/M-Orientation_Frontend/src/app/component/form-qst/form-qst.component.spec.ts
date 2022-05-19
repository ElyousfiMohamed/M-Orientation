import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormQstComponent } from './form-qst.component';

describe('FormQstComponent', () => {
  let component: FormQstComponent;
  let fixture: ComponentFixture<FormQstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormQstComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormQstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
