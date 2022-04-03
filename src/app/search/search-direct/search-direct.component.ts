import { Component, OnInit} from '@angular/core';
import {GameService} from "../../shared/services/game.service";
import {ActivatedRoute, Router} from "@angular/router";
import {map, Observable} from "rxjs";

@Component({
  selector: 'app-search-direct',
  templateUrl: './search-direct.component.html',
  styleUrls: ['./search-direct.component.css']
})
export class SearchDirectComponent implements OnInit {
  //@ts-ignore
  selectedItems: { category: string; device: string; drm: string; pricef: number; pricet: number };

  constructor(private service: GameService,
              private route: ActivatedRoute,
              private router: Router) {

    this.selectedItems = history.state.data;
  }

  ngOnInit(): void {

  }




}

