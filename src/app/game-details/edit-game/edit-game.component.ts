import { Component, Input, OnInit } from '@angular/core';
import {GameService} from "../../shared/services/game.service";
import {Game} from "../../shared/models/game.model";
import {Category, getEnum} from "../../shared/enums/category-enum.model";
import {Device} from "../../shared/enums/device-enum.model";
import {DRM} from "../../shared/enums/drm-enum.model";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.css']
})
export class EditGameComponent implements OnInit {
  @Input() game: Game = new Game(1,'test',[Category.SandBox],Device.PC, DRM.GOG, '',0,'');
  @Input() games: Game[] = [];
  category: Category[] = Object.values(Category);
  device: Device[] = Object.values(Device);
  drm: DRM[] = Object.values(DRM);

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  isChecked(index: number, category: string) {
    for (let cat of this.game.category) {
      if (cat === category) {
        // let item = <HTMLInputElement> document.getElementById('category' + index);
        // item.checked;
        return true;
      }
    }
    return false;
  }

  onSubmit(form: NgForm) {
    let values = form.value;
    let category: Category[] = this.getCheckedItem();
    let name = <HTMLInputElement> document.getElementById('name');
    let device = this.game.device;
    let Drm = this.game.DRM;
    let descriptionEl = <HTMLInputElement> document.getElementById('description');
    let description: string = '';
    let price = <HTMLInputElement> document.getElementById('price');
    if (values.selectDevice.length > 0) {
      device = values.selectDevice;
    }
    if (values.selectDrm.length > 0) {
      Drm = values.selectDrm;
    }

    if (descriptionEl.textContent !== null){
      description = descriptionEl.textContent;
    }

    let gameToSend: Game = new Game(
      this.game.id,
      name.value,
      category,
      device,
      Drm,
      description,
      +price.value,
      this.game.imgUrl
    );

    this.game = gameToSend;

    this.gameService.editGame(gameToSend);

    this.router.navigate(['/']);
  }

  getCheckedItem() {
    var checkedBox = document.getElementsByName('checkbox');
    var checkedCategoryList: Category[] = [];

    for (let i = 0; i < checkedBox.length; i++) {
      let checkedForSearch = <HTMLInputElement> checkedBox[i];
      if (checkedForSearch.checked) {
        let categoryToSend = getEnum(checkedForSearch.value);
        checkedCategoryList.push(categoryToSend);
      }
    }
    return checkedCategoryList;
  }
}
