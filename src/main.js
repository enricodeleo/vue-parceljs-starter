/* ============
 * Main File
 * ============
 *
 * Will initialize the application.
 */

import Vue from 'vue';

/* ============
* Plugins
* ============
*
* Import and bootstrap the plugins.
*/

import './plugins/vuex';
import { router } from './plugins/vue-router';
import './plugins/vuex-router-sync';

/* ============
 * Styling
 * ============
 *
 * Import the application styling.
 */

import './styles/main.scss';

/* ============
 * Main App
 * ============
 *
 * Last but not least, we import the main application.
 */

import App from './App';
import store from './store';

Vue.config.productionTip = process.env.NODE_ENV !== 'production';
Vue.config.devtools = process.env.NODE_ENV !== 'production';

/* eslint-disable no-new */
new Vue({
  /**
   * Bind the Vue instance to the HTML.
   */
  el: '#app',

  /**
   * The router.
   */
  router,

  /**
   * The Vuex store.
   */
  store,

  /**
   * Will render the application.
   *
   * @param {Function} h Will create an element.
   */
  render: (h) => h(App),
});
