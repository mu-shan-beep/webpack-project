import { add, mul } from "./js/math";

require("./css/index.css");
require("./css/special.less");

import Vue from "vue";

const app = new Vue({
  el: "#app",
  data: {
    message: "小明",
  },
});
