import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Category, getEnum} from "../../shared/enums/category-enum.model";
import {Device} from "../../shared/enums/device-enum.model";
import {DRM} from "../../shared/enums/drm-enum.model";
import {Game} from "../../shared/models/game.model";
import {GameService} from "../../shared/services/game.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  category: Category[] = Object.values(Category);
  device: Device[] = Object.values(Device);
  drm: DRM[] = Object.values(DRM);
  //@ts-ignore
  game: Game;
  imageUrl: string = "notFound";
  //@ts-ignore
  form: NgForm;

  constructor(
    private gameService: GameService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.form = form;

    let values = this.form.value;
    let gamesList = this.gameService.getGames();
    let category: Category[] = this.getCheckedItem();
    let name = values.name;
    let device = values.selectDevice;
    let Drm = values.selectDrm;
    let description = values.description;
    let price = values.price;
    let id = gamesList.length + 1;

    this.game = new Game(
      id,
      name,
      category,
      device,
      Drm,
      description,
      price,
      this.imageUrl
    )
    gamesList.push(this.game);
    this.gameService.addNewProduct(this.game);
    this.gameService.gamesChanged.emit(gamesList);
    this.router.navigate(['/']);
  }

  getCheckedItem() {
    let checkedBox = document.getElementsByName('checkbox');
    let checkedCategoryList: Category[] = [];

    for (let i = 0; i < checkedBox.length; i++) {
      let checkedForSearch = <HTMLInputElement> checkedBox[i];
      if (checkedForSearch.checked) {
        let categoryToSend = getEnum(checkedForSearch.value);
        checkedCategoryList.push(categoryToSend);
      }
    }
    return checkedCategoryList;
  }

  onImagePicked(event: Event) {
    //@ts-ignore
    const file = (event.target as HTMLInputElement).files[0].name;
    this.imageUrl = "/assets/images/games/" + file;
  }

}
