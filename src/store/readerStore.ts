import HomeStore from "src/store/homeStore";
// eslint-disable-next-line no-unused-vars
import { IReaderStore } from "@common/interface/interface";

class ReaderStore implements IReaderStore {
  homeStore: HomeStore;
  constructor() {
    this.homeStore = new HomeStore();
  }
}

export default new ReaderStore();
