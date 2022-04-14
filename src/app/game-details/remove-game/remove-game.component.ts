import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../shared/models/game.model";
import {Category} from "../../shared/enums/category-enum.model";
import {Device} from "../../shared/enums/device-enum.model";
import {DRM} from "../../shared/enums/drm-enum.model";
import {GameService} from "../../shared/services/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-remove-game',
  templateUrl: './remove-game.component.html',
  styleUrls: ['./remove-game.component.css']
})
export class RemoveGameComponent implements OnInit {
  @Input() game: Game = new Game(1,'test',[Category.SandBox],Device.PC, DRM.GOG, '',0,'');
  response = "";


  constructor(
    private gameService: GameService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }


  onYes() {
    this.gameService.removeGame(this.game);
    this.router.navigate(['/']);
  }
}
