<template>
  <div id="app">
    <v-content>
      <page-header app />
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    'page-header': Header
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  .v-messages__message {
    color: red
  }

  .theme--light.v-pagination .v-pagination__item--active {
    color: #00bcd6;
  }

  .v-toolbar__title {
    cursor: pointer;
  }

  .v-pagination {
    button {
      outline: navajowhite;
    }
  }

  #note {
    .v-menu__content {
      left: 0!important;
      top: 100%!important;
    }
  }
</style>
