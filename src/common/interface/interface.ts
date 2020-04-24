/* eslint-disable no-unused-vars */
import HomeStore from "src/store/homeStore";

export interface IBookTypeModel {
  key: number;
  text: string;
  icon: string;
  href: string;
}

export interface IReaderStore {
  homeStore: HomeStore;
}

export interface IReaderWindow extends Window {
  store: IReaderStore;
}
