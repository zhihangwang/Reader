/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from "mobx-react";
import { configure } from "mobx";
import { NavBar, Icon, WingBlank, WhiteSpace, Picker, List } from "antd-mobile";
import ReaderStore from "./store/readerStore";

import "./index.css";
import Home from "./pages/home";
import SearchBook from "./pages/searchBook";
import { IReaderWindow } from "@common/interface/interface";

configure({
  enforceActions: "always",
});

declare let window: IReaderWindow;
window.store = ReaderStore;

const page = () => {
  return (
    <Provider store={window.store}>
      <WhiteSpace size="lg" />
      <WingBlank size="sm">
        <Router>        
          <Route path="/" exact component={Home}></Route>
          <Route path="/searchBook" component={SearchBook}></Route>
        </Router>
      </WingBlank>
    </Provider>
  );
};

ReactDOM.render(
  <React.StrictMode>{page()}</React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
