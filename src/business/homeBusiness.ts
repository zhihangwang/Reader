/* eslint-disable no-unused-vars */
import { IBookTypeModel } from "@common/interface/interface";
/* eslint-disable no-unused-vars */
import { IReaderWindow } from "./../common/interface/interface";

export const HomeBusiness = ({ store }: IReaderWindow): IHomeBusiness => {
  const { homeStore } = store;

  const propsConnect = {
    bookTypeList: homeStore.bookTypeList,
  };

  const dispatchConnect = {
    getBookTypes: () => homeStore.getBookTypes(),
  };

  return {
    ...propsConnect,
    ...dispatchConnect,
  };
};

export interface IHomeBusiness {
  bookTypeList: IBookTypeModel[];
  getBookTypes: () => void;
}
