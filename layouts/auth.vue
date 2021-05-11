<template>
  <div class="auth">
    <Nuxt/>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {}
  },
  async fetch() {
    await this.$store.dispatch('user/init')
  },
}
</script>


