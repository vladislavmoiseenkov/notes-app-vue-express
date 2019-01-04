<template>
  <v-layout justify-center>
    <v-flex md6>
      <form
        @submit.prevent="login"
        autocomplete="off">
        <v-text-field
          label="Email"
          v-model="email"
        ></v-text-field>
        <br>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          autocomplete="new-password"
        ></v-text-field>
        <div class="error" v-html="error" />
        <v-btn
          type="submit"
          dark
          class="cyan"
        >
          Login
        </v-btn>
      </form>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    ...mapActions({
      setUser: 'auth/setUser',
      setToken: 'auth/setToken'
    }),
    async login () {
      if (this.email.length > 0 && this.password.length > 0) {
        try {
          const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })

          this.setUser(response.data.user)
          this.setToken(response.data.token)
          this.$router.push({ name: 'notes' })
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .error {
    color: red;
  }
</style>
