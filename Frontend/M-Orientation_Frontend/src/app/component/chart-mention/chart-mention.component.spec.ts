import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartMentionComponent } from './chart-mention.component';

describe('ChartMentionComponent', () => {
  let component: ChartMentionComponent;
  let fixture: ComponentFixture<ChartMentionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartMentionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartMentionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
