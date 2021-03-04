import { Component } from "react";
import { View, Button, Text, ScrollView, Input } from "@tarojs/components";
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
  componentWillMount() {}

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
        <Input
          type="text"
          focus
          placeholder="123"
          confirmType="search"
          onConfirm={() => console.log("点击了")}
        />
      </View>
    );
  }
}

export default Index;
