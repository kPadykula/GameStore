import {Component, Input, OnInit} from '@angular/core';
import {Game} from "../../shared/models/game.model";
import {Category} from "../../shared/enums/category-enum.model";
import {Device} from "../../shared/enums/device-enum.model";
import {DRM} from "../../shared/enums/drm-enum.model";

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})
export class GameItemComponent implements OnInit {
  @Input('item') game: Game = new Game(
    0,
    'Test',
    [Category.Action],
    Device.PS5,
    DRM.Other,
    'This is test description',
    32,
    ''
  );

  constructor() { }

  ngOnInit(): void {

  }

  ScrollUp() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
