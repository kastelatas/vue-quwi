export const state = () => ({
  user: {},
  token: '',
  errors:{}
})

export const actions = {
  async login(ctx, payload) {
    await fetch(`https://${process.env.API_HOST}/auth/login`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }).then(res => {
      return res.json()
    }).then(data => {
      console.log(data)
      if (data.first_errors) {
        console.log('ERROR')
       return  ctx.commit('user/setErrors', data.first_errors, {root: true})
      } else {
        console.log('USEr')
        ctx.commit('user/setLoginUser', data, {root: true})
      }
    })
  },
 async logout(ctx) {
    await fetch(`https://${process.env.API_HOST}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({anywhere: true})
    }).then(res => {
      return res.json()
    }).then(data => {
       ctx.commit('user/setLogoutUser', '', {root: true})
    })
  },
  async init(ctx) {
    const token = this.$cookies.get('token')
    await fetch(`https://${process.env.API_HOST}/auth/init`, {
      method: 'GET',
      headers: {
        'AUTHORIZATION': `Bearer ${token}`,
      },
    }).then(res => {
      return res.json()
    }).then(data => {
      ctx.commit('user/setInitUser', data, {root: true})
    }).catch(e => {

      // ctx.commit('user/setErrors', e.first_errors)
    })
  }
}

export const mutations = {
  setLoginUser(state, payload){
    state.user = payload.app_init.user
    state.token = payload.token
    this.$cookies.set('token', payload.token,{path: '/', maxAge: 60 * 60 * 24 * 7})
  },
  setInitUser(state, payload) {
    state.user = payload.user
    state.token = this.$cookies.get('token')
  },
  setLogoutUser(state, payload) {
    state.user = {}
    state.token = ''
    this.$cookies.remove('token')
  },
  setErrors(state, payload){
    state.errors = payload
  }
}

export const getters = {
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
