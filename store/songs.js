export const state = () => {
  data: []
}

export const mutations = {
  SET_SONGS: (state, payload) => {
    state.data = payload
  }
}