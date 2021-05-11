<template>
  <div class="single-project-layout">
  <Navbar :isSingle="true"/>
  <Nuxt/>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
export default {
components:{Navbar}
}
</script>

<style scoped>

</style>
