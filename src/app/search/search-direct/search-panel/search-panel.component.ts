import {Component, OnInit} from '@angular/core';
import {GameService} from "../../../shared/services/game.service";
import {Category} from "../../../shared/enums/category-enum.model";
import {Device} from "../../../shared/enums/device-enum.model";
import {DRM} from "../../../shared/enums/drm-enum.model";
import {NgForm} from "@angular/forms";
import {ActivatedRoute, Router, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  category: Category[] = Object.values(Category);
  device: Device[] = Object.values(Device);
  drm: DRM[] = Object.values(DRM);
  //@ts-ignore
  form: NgForm;
  constructor(private service: GameService,
              private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSearchGame(form: NgForm) {
    this.form = form;
    const value = form.value;

    if(value.priceFrom <= value.priceTo)
      value.valid = true;
    else if (!value.priceFrom)
      value.valid = true;
    else if (!value.priceTo)
      value.valid = true;
    else
      value.valid = false;

    if(form.valid && value.valid){
       this.service.itemsSelected.emit({
         category: value.selectCategory,
         device: value.selectDevice ,
         drm: value.selectDrm,
         pricef: +value.priceFrom,
         pricet: +value.priceTo
       });
    }

  }

}
