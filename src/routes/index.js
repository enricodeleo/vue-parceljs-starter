/* ============
 * Routes File
 * ============
 *
 * The routes and redirects are defined in this file.
 */

export default [
  // Home
  {
    path: '/',
    name: 'home.main',
    component: () => import('~/src/pages/Home/Main'),

    meta: {
      title: 'Vue parceljs starter',
      breadcrumb: 'Home',
    },
  },
  {
    path: '/*',
    redirect: '/',
  },
];
