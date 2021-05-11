<template>
  <div class="main">
    <Navbar/>
    <Nuxt/>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";

export default {
  middleware: 'auth',
  components: {Navbar},

}
</script>
