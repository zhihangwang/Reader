/* eslint-disable no-unused-vars */
import React, { Component } from "react";
// eslint-disable-next-line no-unused-vars
import { IBookTypeModel } from "@common/interface/interface";
import { Grid, WhiteSpace, SearchBar } from "antd-mobile";
// eslint-disable-next-line no-unused-vars
import { DataItem } from "antd-mobile/lib/grid/PropsType";
import Header from "./header";
import { observer, inject } from "mobx-react";
import { HomeBusiness, IHomeBusiness } from "../business/homeBusiness";

@inject(HomeBusiness)
@observer
export default class Home extends Component<HomeProps> {
  componentDidMount() {
    this.props.getBookTypes();
  }

  render() {
    const onChangeWeb = (webId: number) => {
      console.log(webId);
    };

    const selectBookType = (x: IBookTypeModel) => {
      console.log(x.key);
    };

    return (
      <div>
        <Header isShowWebFilter={true} onChangeWeb={onChangeWeb}></Header>
        <SearchBar placeholder="搜索书籍" cancelText="搜索" />
        <WhiteSpace />
        <Grid
          data={this.props.bookTypeList}
          columnNum={3}
          onClick={(x) => {
            selectBookType(x as IBookTypeModel);
          }}
        />
      </div>
    );
  }
}

interface HomeProps extends IHomeBusiness {}
