import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../../models/game';
import { PlayerComponent } from '../player/player.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss',
})

export class GameComponent {
  pickCardAnimation = false;
  game!: Game;
  currentCard: (string | undefined);


  constructor(public dialog: MatDialog) {
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
    }, 1200);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent, {
    });

    dialogRef.afterClosed().subscribe((name: string) => {
      this.game.players.push(name);
    });
  }
}


