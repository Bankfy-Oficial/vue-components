import NiceHandsomeButton from "./NiceHandsomeButton.vue";
import Button from "./Button.vue";

export default {
  install(Vue) {
    Vue.component("nice-handsome-button", NiceHandsomeButton);
    Vue.component("Button", Button);
  }
};
