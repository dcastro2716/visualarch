// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from './store';
import App from './App';
import router from './router';
import './assets/style.scss';

Vue.config.productionTip = false;

Vue.directive('draggable', {
  bind: el => {
    el.style.position = 'absolute';
    let startX;
    let startY;
    let initialMouseX;
    let initialMouseY;

    function mousemove(e) {
      const dx = e.clientX - initialMouseX;
      const dy = e.clientY - initialMouseY;
      el.style.top = `${startY + dy}px`;
      el.style.left = `${startX + dx}px`;
      console.log(e.clientX);
      return false;
    }

    function mouseup() {
      document.removeEventListener('mousemove', mousemove);
      document.removeEventListener('mouseup', mouseup);
    }

    el.addEventListener('mousedown', e => {
      startX = el.offsetLeft;
      startY = el.offsetTop;
      initialMouseX = e.clientX;
      initialMouseY = e.clientY;
      document.addEventListener('mousemove', mousemove);
      document.addEventListener('mouseup', mouseup);
      return false;
    });
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
