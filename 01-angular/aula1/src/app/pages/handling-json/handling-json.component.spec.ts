import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandlingJsonComponent } from './handling-json.component';

describe('HandlingJsonComponent', () => {
  let component: HandlingJsonComponent;
  let fixture: ComponentFixture<HandlingJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HandlingJsonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HandlingJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
