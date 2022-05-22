import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartChoixComponent } from './chart-choix.component';

describe('ChartChoixComponent', () => {
  let component: ChartChoixComponent;
  let fixture: ComponentFixture<ChartChoixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartChoixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartChoixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
