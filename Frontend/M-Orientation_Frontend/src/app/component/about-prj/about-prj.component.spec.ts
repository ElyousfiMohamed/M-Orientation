import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPrjComponent } from './about-prj.component';

describe('AboutPrjComponent', () => {
  let component: AboutPrjComponent;
  let fixture: ComponentFixture<AboutPrjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPrjComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutPrjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
