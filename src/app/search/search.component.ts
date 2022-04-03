import { Component, OnInit } from '@angular/core';
import {GameService} from "../shared/services/game.service";
import {Category} from "../shared/enums/category-enum.model";
import {Device} from "../shared/enums/device-enum.model";
import {DRM} from "../shared/enums/drm-enum.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  category: Category[] = Object.values(Category);
  device: Device[] = Object.values(Device);
  drm: DRM[] = Object.values(DRM);

  constructor(private service: GameService) { }

  ngOnInit(): void {
    console.log(this.drm[1]);
  }

}
