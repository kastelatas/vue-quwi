<template>
  <div class="login-form">
    <template v-if="!loader ">
      <p class="login-form__title">Login</p>
      <form @submit.prevent="login">
        <input type="email" v-model="form.email" placeholder="Email" class="input input-text" required/>
        <input type="password" v-model="form.password" placeholder="Password" class="input input-text" required/>
        <span class="errors">{{errors.email}}</span>
        <button type="submit" class="btn btn-form">Login</button>
      </form>
    </template>
    <Loader v-else/>
  </div>
</template>

<script>
import Loader from "~/components/Loader";
export default {
  components:{Loader},
  data() {
    return {
      form: {
        email: 'vitaliibondtest@gmail.com',
        password: 'vitaliibondtest',
      },
      loader: false
    }
  },
  methods: {
    async login() {
      if (!this.form.email.length || !this.form.password.length) {
        return
      }
      const payload = {
        email: this.form.email,
        password: this.form.password
      }
      this.loader = true;
      await this.$store.dispatch('user/login', payload).then(data => {
        this.$router.push('/home')
      })
      this.loader = false;
    }
  },
  computed:{
    errors(){
      return this.$store.getters["user/getErrors"]
    }
  }
}
</script>

<style scoped>

</style>
