// import Vue from 'vue'
// import App from './Example.vue'
//
//
// Vue.config.productionTip = false
//
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
import gojsDesigner from './Designer';

gojsDesigner.install = (Vue) => {
    Vue.component(gojsDesigner.name, gojsDesigner);
};

export default gojsDesigner;
