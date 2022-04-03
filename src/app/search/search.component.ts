import {Component, OnInit, Output} from '@angular/core';
import {GameService} from "../shared/services/game.service";
import {Category} from "../shared/enums/category-enum.model";
import {Device} from "../shared/enums/device-enum.model";
import {DRM} from "../shared/enums/drm-enum.model";
import {NgForm} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  category: Category[] = Object.values(Category);
  device: Device[] = Object.values(Device);
  drm: DRM[] = Object.values(DRM);

  constructor(private service: GameService,
              private router: Router) { }

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
      this.router.navigateByUrl(
        '/search', {
          state: { data: {
                category: value.selectCategory,
                device: value.selectDevice ,
                drm: value.selectDrm,
                pricef: +value.priceFrom,
                pricet: +value.priceTo
            }}
        });
    }
  }

}
