<template>
  <div class="nav-bar" :class="{'is-single': isSingle}">
    <div class="row jc-sb ai-center" v-if="!isSingle">
      <div class="logo">
        <span>Q</span>
      </div>
      <div class="menu">
        <ul class="nav">
          <router-link tag="li" to="/home">
            Projects
          </router-link>
          <li @click="logout">
            Logout
          </li>
        </ul>
      </div>
    </div>
    <div class="row jc-sb ai-center" v-else>
      <router-link to="/home" class="btn btn-link">back</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    isSingle:{
      type: Boolean
    }
  },
  methods:{
    async logout(){
      await this.$store.dispatch('user/logout')
      await this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
