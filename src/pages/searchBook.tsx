import React, { Component } from "react";
import Header from "./header";

export class SearchBook extends Component {
  render() {
    const onChangeWeb = () => {};
    return (
      <div>
        <Header isShowWebFilter={false} onChangeWeb={onChangeWeb}></Header>
        Search Book
      </div>
    );
  }
}

export default SearchBook;
