<template>
  <router-link tag="div" :to="'/project/'+project.id" class="project-item">
    <div class="row ai-center">
      <div class="project-item__img">
        <img v-if="project.logo_url" :src="project.logo_url" alt="">
      </div>
      <p class="project-item__name" v-if="project.name">{{ project.name }}</p>
    </div>
    <span class="project-item__active" :class="{'project-item__not-active': !project.is_active}">{{ project.is_active ? 'Active' : 'Not active' }}</span>
    <div class="project-item__times">
      <p class="row jc-sb">
        <span>this month</span>
        <span>00:00:00</span>
      </p>
      <p class="row jc-sb">
        <span>time this week</span>
        <span>00:00:00</span>
      </p>
      <p class="row jc-sb">
        <span>total</span>
        <span>00:00:00</span>
      </p>

    </div>
  </router-link>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
    }
  }
}
</script>

<style scoped>

</style>
