import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {GameService} from "../../../shared/services/game.service";
import {Category} from "../../../shared/enums/category-enum.model";
import {Device} from "../../../shared/enums/device-enum.model";
import {DRM} from "../../../shared/enums/drm-enum.model";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-search-panel',
  templateUrl: './search-panel.component.html',
  styleUrls: ['./search-panel.component.css']
})
export class SearchPanelComponent implements OnInit {
  category: Category[] = Object.values(Category);
  device: Device[] = Object.values(Device);
  drm: DRM[] = Object.values(DRM);

  constructor(private service: GameService) { }

  ngOnInit(): void {
  }

  onSearchGame(form: NgForm) {
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
