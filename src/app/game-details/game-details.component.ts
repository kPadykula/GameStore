import {Component, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {Game} from "../shared/models/game.model";
import {Category} from "../shared/enums/category-enum.model";
import {Device} from "../shared/enums/device-enum.model";
import {DRM} from "../shared/enums/drm-enum.model";
import {GameService} from "../shared/services/game.service";
import {ActivatedRoute, Params} from "@angular/router";
import {LoginService} from "../shared/services/login.service";

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {
  game: Game = new Game(1,'test',[Category.SandBox],Device.PC, DRM.GOG, '',0,'');
  games: Game[] = [];
  isLogin: boolean = false;
  onEdit: boolean = false;

  constructor(
    private service: GameService,
    private route: ActivatedRoute,
    private loginService: LoginService
  ) {

  }

  ngOnInit(): void {
    if(this.route.snapshot.params['id']) {
        //@ts-ignore
        this.game = this.service.getGame(+this.route.snapshot.params['id']);
        this.route.params.subscribe(
          (params: Params) => {
            // @ts-ignore
            this.game = this.service.getGame(+params['id']);
            //@ts-ignore
            for (let cat of this.game.category) {
              this.games = this.service.getGameByCategory(cat, this.service.getGames());
            }

            this.games = this.games.filter((item, index) => {
              return this.game !== item;
            });

          });

    }else
        this.game = this.game;


    this.isLogin = this.loginService.isLoginBool;
    this.loginService.isLogin.subscribe(val => {
      this.isLogin = val;
    });

  }


  removeGame() {

  }


}
