import React, { Component } from "react";
import Taro, { createCanvasContext, getSystemInfoSync } from "@tarojs/taro";
import { Canvas } from "@tarojs/components";
import "./index.less";

const BG_MAP = {
  alipay:
    "https://pic.qianmi.com/qmui/v0.2/img/business-circle/shop-poster-x4-alipay.png",
  weapp:
    "https://pic.qianmi.com/qmui/v0.2/img/business-circle/shop-poster-bg-x4-new.png",
};
const { pixelRatio } = getSystemInfoSync();
export default class Test extends Component {
  el: any;
  state = {
    x: 0,
    y: 0,
    canvasWidth: 0,
    canvasHeight: 0,
  };
  async componentDidMount() {
    const ctx = createCanvasContext("canvas");
    const data = await Taro.getImageInfo({
      src:
        "https://pic.qianmi.com/qmui/v0.2/img/business-circle/shop-poster-x4-alipay.png",
    });
    console.log(data, this.el);
    const r = data.width / data.height;
    this.setState({
      x: data.width,
      y: data.height,
      canvasWidth: 600,
      canvasHeight: Math.ceil(600 / r),
    });
    ctx.drawImage(
      data.path,
      0,
      0,
      600 * pixelRatio,
      Math.ceil(600 / r) * pixelRatio
    );
    ctx.save();
    ctx.draw(false);
  }
  render() {
    const { x, y, canvasWidth, canvasHeight } = this.state;
    return (
      <Canvas
        width={canvasWidth * pixelRatio}
        height={canvasHeight * pixelRatio}
        style={`width:${canvasWidth}px;height:${canvasHeight}px;`}
        ref={(el) => (this.el = el)}
        canvasId="canvas"
        id="canvas"
      />
    );
  }
}
