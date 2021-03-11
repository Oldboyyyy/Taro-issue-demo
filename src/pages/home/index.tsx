import React from "react";
import { View, Button, Text } from "@tarojs/components";
import { observer, inject } from "mobx-react";
import { navigateTo } from "@tarojs/taro";

export default class extends React.Component {
  componentDidShow() {
    console.log("page home componentDidShow");
  }
  render() {
    console.log(this.props);
    return (
      <View>
        123
        <View onClick={() => navigateTo({ url: "/pages/my/index" })}>
          page my
        </View>
      </View>
    );
  }
}
