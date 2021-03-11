import { Component } from "react";
import {
  View,
  Button,
  Text,
  ScrollView,
  Input,
  Label,
} from "@tarojs/components";
import { navigateTo } from "@tarojs/taro";
import { observer, inject } from "mobx-react";
import Demo from "./demo";
import "./index.less";

type PageStateProps = {
  store: {
    counterStore: {
      counter: number;
      increment: Function;
      decrement: Function;
      incrementAsync: Function;
    };
  };
};

interface Index {
  props: PageStateProps;
}

const arr = [1, 2, 3, 4];

@inject("store")
@observer
class Index extends Component {
  state = {
    focus: false,
  };
  el: any;
  componentWillMount() {
    console.log(this.el);
  }

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  increment = () => {
    const { counterStore } = this.props.store;
    counterStore.increment();
  };

  decrement = () => {
    const { counterStore } = this.props.store;
    counterStore.decrement();
  };

  incrementAsync = () => {
    const { counterStore } = this.props.store;
    counterStore.incrementAsync();
  };

  render() {
    const {
      counterStore: { counter },
    } = this.props.store;
    return (
      <View className="index">
        <Label ref={(el) => (this.el = el)}>
          <Input
            type="text"
            focus
            placeholder="123"
            confirmType="search"
            onConfirm={() => console.log("点击了")}
          />
        </Label>
        <Button
          onClick={() => navigateTo({ url: "/pages/my/index?t=" + Date.now() })}
        >
          page home
        </Button>
      </View>
    );
  }
}

export default Index;
