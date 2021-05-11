<template>
  <div class="single-project" >
    <div class="container">
      <span class="errors mt-20" v-if="errors">{{errors.name}}</span>
      <form @submit.prevent="update" v-if="project">
        <div class="row ai-center">
          <p>Name</p>
          <input type="text" class="input input-text" v-model="name">
          <button class="btn">OK</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'singleProject',
  data() {
    return {
      name: '',
    }
  },
  computed: {
    project() {
      if (this.$store.getters["project/getProject"]){
        this.name = this.$store.getters["project/getProject"].name
      }
      return this.$store.getters["project/getProject"]
    },
    errors(){
      return this.$store.getters["project/getErrors"]
    }
  },

  methods: {
    async update() {
      const payload = {
        id: this.$route.params.id,
        data: {
          name: this.name
        }
      }
      await this.$store.dispatch('project/fetchUpdateProject', payload)
      if (!this.errors) {
        await this.$router.push('/home')
      }
    }
  },
  async fetch() {
    await this.$store.dispatch('project/fetchProject', this.$route.params.id)
  }
}
</script>

<style scoped>

</style>
