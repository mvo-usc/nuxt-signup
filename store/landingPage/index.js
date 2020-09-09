export const state = () => ({
  slug: '',
  type: '',
  object: {}
})

export const mutations = {
  setSlug(state, slug) {
    state.slug=slug
  },
  setType(state, type) {
    state.type=type
  },
  setObject(state, object) {
    state.object=object
  }
}

export const getters = {
  slug(state) {
    return state.slug
  },
  type(state) {
    return state.type
  },
  object(state){
    return state.object
  }
}

