import Vue from 'vue'
import App from './app/app.vue'
import router from './router'
import store from './store'

new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })

ga('set', 'page', router.currentRoute.path);
ga('send', 'pageview');

router.afterEach(( to, from ) => {
  ga('set', 'page', to.path);
  ga('send', 'pageview');
});