import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartEtablissementComponent } from './chart-etablissement.component';

describe('ChartEtablissementComponent', () => {
  let component: ChartEtablissementComponent;
  let fixture: ComponentFixture<ChartEtablissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartEtablissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartEtablissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
