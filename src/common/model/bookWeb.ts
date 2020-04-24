/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { IUrls } from "../interface/bookWeb";
// eslint-disable-next-line no-unused-vars
import { IBookWeb } from "@common/interface/bookWeb";
import { IBookTypeModel } from "@common/interface/interface";
import axios from "axios";

export class QiDian implements IBookWeb {
  urls: IUrls;
  bookTypeList: IBookTypeModel[];
  constructor() {
    this.urls = {
      getBookTypes: "",
    };
    this.bookTypeList = this.getBookTypeList();
    this.x();
  }

  getBookTypeList(): IBookTypeModel[] {
    let imageBasePath = `${process.env.PUBLIC_URL}/image`;
    return [
      {
        key: 1,
        text: "玄幻",
        icon: `${imageBasePath}/xuanhuan.png`,
        href: "1",
      },
      {
        key: 2,
        text: "奇幻",
        icon: `${imageBasePath}/qihuan.png`,
        href: "1",
      },
      {
        key: 3,
        text: "武侠",
        icon: `${imageBasePath}/wuxia.png`,
        href: "1",
      },
      {
        key: 4,
        text: "仙侠",
        icon: `${imageBasePath}/xianxia.png`,
        href: "1",
      },
      {
        key: 5,
        text: "都市",
        icon: `${imageBasePath}/dushi.png`,
        href: "1",
      },
      {
        key: 6,
        text: "现实",
        icon: `${imageBasePath}/xianshi.png`,
        href: "1",
      },
      {
        key: 7,
        text: "军事",
        icon: `${imageBasePath}/junshi.png`,
        href: "1",
      },
      {
        key: 8,
        text: "历史",
        icon: `${imageBasePath}/lishi.png`,
        href: "1",
      },
      {
        key: 9,
        text: "游戏",
        icon: `${imageBasePath}/youxi.png`,
        href: "1",
      },
      {
        key: 10,
        text: "体育",
        icon: `${imageBasePath}/tiyu.png`,
        href: "1",
      },
      {
        key: 11,
        text: "科幻",
        icon: `${imageBasePath}/kehuan.png`,
        href: "1",
      },
      {
        key: 12,
        text: "悬疑",
        icon: `${imageBasePath}/xuanyi.png`,
        href: "1",
      },
    ];
  }

  x() {
    axios.get("/qidian").then((rawDate) => {
      console.log(rawDate);
    });
  }
}

export class BiQu implements IBookWeb {
  urls: IUrls;
  bookTypeList: IBookTypeModel[];
  constructor() {
    this.urls = {
      getBookTypes: "",
    };
    this.bookTypeList = [];
  }
}

export default {
  qiDian: QiDian,
  biQu: BiQu,
};
