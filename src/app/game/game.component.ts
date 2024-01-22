import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})

export class GameComponent {
  pickCardAnimation = false;
  game!: Game;
  currentCard: (string | undefined);

  constructor() {
    this.game = new Game();
  }

  takeCard() {
    this.currentCard = this.game.stack.pop();
    this.pickCardAnimation = true;
    setTimeout(() => {
      if (this.currentCard) {
        this.game.playedCards.push(this.currentCard);
      }
      this.pickCardAnimation = false;
    }, 1000);
  }
}
