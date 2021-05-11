<template>
  <div class="project-list">
    <Project v-for="project in projects" :key="project.id" :project="project"/>
  </div>
</template>

<script>
import Project from "~/components/Projects/Project";

export default {
  components: {Project},
  props: {
    projects: {
      type: Array,
    }
  }
}
</script>

<style scoped>

</style>
