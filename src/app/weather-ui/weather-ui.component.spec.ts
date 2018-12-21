import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherUIComponent } from './weather-ui.component';

describe('WeatherUIComponent', () => {
  let component: WeatherUIComponent;
  let fixture: ComponentFixture<WeatherUIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherUIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
