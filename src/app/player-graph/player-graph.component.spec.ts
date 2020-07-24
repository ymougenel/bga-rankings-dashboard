import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerGraphComponent } from './player-graph.component';

describe('PlayerGraphComponent', () => {
  let component: PlayerGraphComponent;
  let fixture: ComponentFixture<PlayerGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
