<template>
  <main>
    <form @submit.prevent="submit" class="w-50 mx-auto">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input
          v-model="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Enter email"
          required
        >
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input
          v-model="password"
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          required
        >
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </main>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async submit () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response)
    }
  }
}
</script>

<style lang="scss">
</style>
