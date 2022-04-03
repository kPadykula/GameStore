import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../shared/models/game.model";
import {Category} from "../shared/enums/category-enum.model";
import {Device} from "../shared/enums/device-enum.model";
import {DRM} from "../shared/enums/drm-enum.model";
import {GameService} from "../shared/services/game.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  game: Game = new Game(1,'test',[Category.SandBox],Device.PC, DRM.GOG, '',0,'');
  games: Game[] = [];

  constructor(private service: GameService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['id']) {
      //@ts-ignore
      this.game = this.service.getGame(+this.route.snapshot.params['id']);
      this.route.params.subscribe(
        (params: Params) => {
          // @ts-ignore
          this.game = this.service.getGame(+params['id']);
        });

      //@ts-ignore
      this.games = this.service.getGameByCategory(this.game);
      console.log(this.games);
    }else
        this.game = this.game;

  }
}
