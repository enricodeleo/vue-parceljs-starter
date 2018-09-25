<template>
  <v-layout>
    <section class="hero is-fullheight is-info home-bg-1">
      <div class="hero-body">
        <div class="container">
          <h1 class="title is-1">
            Hello World!
          </h1>
        </div>
      </div>
    </section>
  </v-layout>
</template>

<script>
  /* ============
   * Register Home Page
   * ============
   */
  import VLayout from '~/src/layouts/Default';

  export default {
    /**
     * The name of the page.
     */
    name: 'home-main',

    /**
     * The data that can be used by the page.
     *
     * @returns {Object} The view-model data.
     */
    data() {
      return {
      };
    },

    /**
     * The components the page can use.
     */
    components: {
      VLayout,
    },
  };
</script>
