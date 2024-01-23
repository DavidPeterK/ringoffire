import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-game-property',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './game-property.component.html',
  styleUrl: './game-property.component.scss'
})
export class GamePropertyComponent implements OnInit, OnChanges {
  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'On the floor', description: 'On the floor – The last player to touch the floor must take a shot. You need to be super-quick when a 4 is pulled; otherwise, you’ll be drinking an extra shot on this one.' },
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one. ' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Rhyme', description: 'The player picks a word like “cat”. The next player has to say a rhyming word like”bat” or “mat”. This goes on until a player messes up and says a non-rhyming word. That player gets a penalty and has to take a shot.' },
    { title: 'Men', description: 'All men drink.' },
    { title: 'Thumbmaster', description: 'The player who pulls out a Jack gets the power to make a new rule. The rule is followed throughout the game and whoever disobeys must chug up.' },
    { title: 'Quizmaster', description: 'The player becomes the question master for the game till someone else draws a queen. The question master has the authority to pose a question at any point during the game, and all the players must answer it with another question. If a player forgets and answers the question master, he/she drinks.' },
    { title: 'Never have i ever...', description: 'Say something you never did. Everyone who did it has to drink.' },
  ];
  title: string = '';
  description: string = '';
  @Input() card: string | undefined;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }
}
