<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title @click="goTo('notes')">Notes App</v-toolbar-title>
    <v-toolbar-items class="hidden-sm-and-down" v-if="user !== null">
      <v-btn flat @click="goTo('notes')">Notes</v-btn>
      <v-btn flat @click="goTo('create-note')">Create Add</v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down" v-if="user === null">
      <v-btn flat @click="goTo('login')">Login</v-btn>
      <v-btn flat @click="goTo('register')">Register</v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="hidden-sm-and-down" v-else>
      <v-btn flat @click="logout">Logout</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Header',
  computed: {
    ...mapGetters({
      user: 'auth/getUser'
    })
  },
  methods: {
    ...mapActions({
      setUser: 'auth/setUser',
      setToken: 'auth/setToken'
    }),
    goTo (routeName) {
      this.$router.push({ name: routeName })
    },
    logout () {
      this.setToken(null)
      this.setUser(null)
      this.goTo('login')
    }
  }
}
</script>

<style scoped>

</style>
