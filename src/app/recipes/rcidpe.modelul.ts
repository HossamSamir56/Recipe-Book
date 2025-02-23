import { Ingrdiens } from './../hsared/ingrdiens.model';
export class Recipe {
  public name: string;
  public description: string;
  public imgPath: string;
  public ingrdiens: Ingrdiens[];
  constructor(
    name: string,
    description: string,
    imgPath: string,
    ingrdiens: Ingrdiens[]
  ) {
    this.name = name;
    this.description = description;
    this.imgPath = imgPath;
    this.ingrdiens = ingrdiens;
  }
}
