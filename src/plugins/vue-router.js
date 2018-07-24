/* ============
 * Vue Router
 * ============
 *
 * The official Router for Vue.js. It deeply integrates with Vue.js core
 * to make building Single Page Applications with Vue.js a breeze.
 *
 * http://router.vuejs.org/en/index.html
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '~/src/routes';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes,
});

/**
 * Change document <title>
 */
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

Vue.router = router;

export default {
  router,
};
