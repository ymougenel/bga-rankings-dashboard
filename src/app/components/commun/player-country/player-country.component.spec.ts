import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerCountryComponent } from './player-country.component';

describe('PlayerCountryComponent', () => {
  let component: PlayerCountryComponent;
  let fixture: ComponentFixture<PlayerCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
