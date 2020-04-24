import { QiDian } from "./../common/model/bookWeb";
/* eslint-disable no-unused-vars */
import { IBookTypeModel } from "@common/interface/interface";
import { action, observable, runInAction } from "mobx";

export default class HomeStore {
  @observable
  bookTypeList: IBookTypeModel[] = [];
  @action
  async getBookTypes() {
    runInAction(() => {
      this.bookTypeList = new QiDian().bookTypeList;
    });
  }
}
