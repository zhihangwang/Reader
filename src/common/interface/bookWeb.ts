// eslint-disable-next-line no-unused-vars
import { IBookTypeModel } from "./interface";

export interface IBookWeb {
  urls: IUrls;
  bookTypeList: IBookTypeModel[];
}

export interface IUrls {
  getBookTypes: string;
}
