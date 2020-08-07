import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRankingtableComponent } from './player-rankingtable.component';

describe('PlayerRankingtableComponent', () => {
  let component: PlayerRankingtableComponent;
  let fixture: ComponentFixture<PlayerRankingtableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerRankingtableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRankingtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
