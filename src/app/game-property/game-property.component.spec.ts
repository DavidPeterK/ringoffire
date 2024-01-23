import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePropertyComponent } from './game-property.component';

describe('GamePropertyComponent', () => {
  let component: GamePropertyComponent;
  let fixture: ComponentFixture<GamePropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamePropertyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GamePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
