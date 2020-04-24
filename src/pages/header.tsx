import React, { Component } from "react";
import { NavBar, Icon, Picker, List, WhiteSpace } from "antd-mobile";
import { Link } from "react-router-dom";
import { Web, WebName } from "@common/enum/enum";

export default class Header extends Component<HeaderProps> {
  state = {
    selectWebId: Web.QiDianWeb,
    selectWebName: WebName[Web.QiDianWeb],
  };

  changeWeb(x: number) {
    this.setState({
      selectWebId: x,
      selectWebName: WebName[x],
    });
    this.props.onChangeWeb && this.props.onChangeWeb(x);
  }

  render() {
    return (
      <div>
        <NavBar
          mode="light"
          leftContent={[
            <Link to="/" key="indexBtn">
              首页
            </Link>,
          ]}
          rightContent={[
            <Link to="/searchBook" key="searchBookBtn">
              <Icon key="0" type="search" style={{ marginRight: "16px" }} />
            </Link>,
          ]}
        >
          <Picker
            data={[
              { value: 1, label: "起点", children: [] },
              { value: 2, label: "笔趣网", children: [] },
            ]}
            cols={1}
            onChange={(selectValue) => {
              let selectWebId =
                selectValue && selectValue.length > 0
                  ? (selectValue[0] as number)
                  : Web.QiDianWeb;
              this.changeWeb(selectWebId);
            }}
            extra="切换"
          >
            <List.Item
              style={{ display: this.props.isShowWebFilter ? "black" : "none" }}
            >
              {this.state.selectWebName}
            </List.Item>
          </Picker>
        </NavBar>
        <WhiteSpace />
      </div>
    );
  }
}

interface HeaderProps {
  isShowWebFilter: boolean;
  onChangeWeb?: (webId: Web) => void;
}
