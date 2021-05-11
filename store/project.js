export const state = () => ({
  projects:[],
  project:{},
  errors:{}
})

export const actions = {
  async fetchProjects(ctx) {
    const token = this.$cookies.get('token')
    await fetch(`https://${process.env.API_HOST}/projects-manage/index`, {
      method: 'GET',
      headers: {
        'AUTHORIZATION': `Bearer ${token}`,
      },
    }).then(res => {
      return res.json()
    }).then(data => {
      ctx.commit('project/setProjects', data.projects, {root: true})
    })
  },
  async fetchProject(ctx, id){
    const token = this.$cookies.get('token')
    await fetch(`https://${process.env.API_HOST}/projects-manage/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'AUTHORIZATION': `Bearer ${token}`,
      },
    }).then(res => {
      return res.json()
    }).then(data => {
      console.log(data)
      if (data.status === 404) {
        ctx.commit('project/setErrors', data, {root: true})
      } else {
        ctx.commit('project/setProject', data.project, {root: true})
        ctx.commit('project/setErrors', null, {root: true})
      }
    })
  },
  async fetchUpdateProject(ctx, payload){
    const token = this.$cookies.get('token')
    const formData = new FormData();
    formData.append('name', `${payload.data.name}`)

    await fetch(`https://${process.env.API_HOST}/projects-manage/update?id=${payload.id}`, {
      method: 'POST',
      headers: {
        'AUTHORIZATION': `Bearer ${token}`,
      },
      body: formData
    }).then(res => {
      return res.json()
    }).then(data => {
      if (data.first_errors){
       return  ctx.commit('project/setErrors', data.first_errors, {root: true})
      } else {
        ctx.commit('project/setProject', data.project, {root: true})
        ctx.commit('project/setErrors', null, {root: true})
      }
    })
  }
}

export const mutations = {
  setProjects(state, payload){
    state.projects = payload
  },
  setProject(state, payload){
    state.project = payload
  },
  setErrors(state, payload){
    state.errors = payload
  }
}

export const getters = {
  getProjects(state) {
    return state.projects
  },
  getProject(state) {
    return state.project
  },
  getErrors(state){
    return state.errors
  }
}

export default {
  namespaced: true,
  actions,
  mutations,
  getters,
  state,
};
