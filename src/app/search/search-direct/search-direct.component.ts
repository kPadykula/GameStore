import { Component, OnInit} from '@angular/core';
import {GameService} from "../../shared/services/game.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Game} from "../../shared/models/game.model";

@Component({
  selector: 'app-search-direct',
  templateUrl: './search-direct.component.html',
  styleUrls: ['./search-direct.component.css']
})
export class SearchDirectComponent implements OnInit {
  //@ts-ignore
  selectedItems: { category: string; device: string; drm: string; pricef: number; pricet: number };

  //@ts-ignore
  gamesToShow: Game[];

  constructor(private service: GameService) {

    this.selectedItems = history.state.data;

  }

  ngOnInit(): void {
    this.gamesToShow = this.service.getGameByFilters(
      this.selectedItems.category,
      this.selectedItems.device,
      this.selectedItems.drm,
      this.selectedItems.pricef,
      this.selectedItems.pricet
    );

  }




}

