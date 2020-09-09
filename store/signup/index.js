export const state = () => ({
  city: '',
  company: '',
  product: '',
  email: '',
  phone: '',
  phoneValid: false,
})

// todo: create action which will persist/load this values from backend

export const mutations = {
  setCity(state, slug) {
    state.city=slug
  },
  setCompany(state, slug) {
    state.company=slug
  },
  setProduct(state, name) {
    state.product=name
  },
  setEmail(state, slug) {
    state.email=slug
  },
  setPhone(state, phone) {
    state.phone=phone
  },
  setPhoneValid(state, isValid) {
    state.phoneValid=isValid
  },
}

export const getters = {
  city(state) {
    return state.city
  },
  company(state) {
    return state.company
  },
  product(state) {
    return state.product
  },
  email(state) {
    return state.email
  },
  phone(state) {
    return state.phone
  },
  phoneValid(state) {
    return state.phoneValid
  },
}
