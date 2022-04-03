import {Category} from "../enums/category-enum.model";
import {Device} from "../enums/device-enum.model";
import {DRM} from "../enums/drm-enum.model";

export class Game {

  public id: number;
  public name: string;
  public category: Category[];
  public price: number;
  public device: Device;
  public DRM: DRM;
  public description: string;
  public imgUrl: string;

  constructor(id: number, name: string, category: Category[],
              device: Device, DRM: DRM,
              description: string, price: number,
              img: string
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.device = device;
    this.DRM = DRM;
    this.description = description;
    this.price = price;
    this.imgUrl = img;
  }
}
