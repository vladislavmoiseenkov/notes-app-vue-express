<template>
  <v-layout justify-center>
    <v-flex md6>
      <form
        @submit.prevent="submit"
        autocomplete="off">
        <v-text-field
          label="Username"
          v-model="username"
          required
        ></v-text-field>
        <v-text-field
          label="Email"
          type="email"
          v-model="email"
          required
        ></v-text-field>
        <br>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          required
          autocomplete="new-password"
        ></v-text-field>
        <div class="error" v-html="error" />
        <v-btn
          type="submit"
          dark
          class="cyan"
        >
          Register
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
      username: '',
      password: '',
      error: null
    }
  },
  methods: {
    ...mapActions({
      setUser: 'auth/setUser',
      setToken: 'auth/setToken'
    }),
    async submit () {
      if (this.email.length > 0 && this.password.length > 0) {
        try {
          const response = await AuthenticationService.register({
            email: this.email,
            password: this.password,
            username: this.username
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
