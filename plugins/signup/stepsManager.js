
const stepsManager = () => {
  const DEFAULT_STEPS = [
    'pricing',
    'signup',
    'phone',
    'phone-validation',
    'success'
  ]

  const B2B_GERMANY_STEPS = [
    'pricing',
    'signup',
    'success'
  ]

  const getSteps = (store) => {
    if (store.getters['signup/company'] && store.getters['signup/country'] === 'DE' ) {
      return B2B_GERMANY_STEPS
    }

    return DEFAULT_STEPS
  }

  return {
    getSteps
  }
}
export default stepsManager()
