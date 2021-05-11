<template>
  <div class="home-page">
    <div class="container">
      <ProjectList v-if="projects" :projects="projects"/>
      <p class="no-results" v-else>No Projects</p>
    </div>
  </div>
</template>

<script>
import ProjectList from "~/components/Projects/ProjectList";
import Loader from "~/components/Loader";

export default {
  components: {ProjectList, Loader},
  data() {
    return {}
  },
  computed: {
    projects() {
      return this.$store.getters["project/getProjects"]
    }
  },
  async fetch() {
    await this.$store.dispatch('project/fetchProjects')
  },

}
</script>

