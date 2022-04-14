import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../shared/models/game.model";
import {GameService} from "../shared/services/game.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  //@ts-ignore
  @Input('GameToShow') selectedGames: Game[];
  games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    if (!this.selectedGames)
      this.games = this.gameService.getGames();


    this.gameService.gamesChanged
      .subscribe(
        (games: Game[]) => {
          this.games = games;
        });
  }

}
