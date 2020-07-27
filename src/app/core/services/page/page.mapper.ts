import { Mapper } from "../mapper";
import { PageDto } from './page.dto';
import {Page} from "../../models/page";

export class PageMapper<T> implements Mapper<Page<T>> {

  constructor(private _itemMapper: Mapper<T>) { }

  fromJson(json: PageDto<T>): Page<T> {
    return new Page<T>({
      content: json.content.map(this._itemMapper.fromJson.bind(this._itemMapper)),
      limit: json.size
    });
  }

  toJson(model: Page<T>): any {
  }
}
