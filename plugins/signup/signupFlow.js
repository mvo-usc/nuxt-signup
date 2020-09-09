import stepsManager from "~/plugins/signup/stepsManager";

const signupFlow = ({store, redirect}, inject) => {
  const validateMissedSignupParts = (routeName) => {
    const steps = stepsManager.getSteps(store);
    if (!routeName in steps) {
      redirect({name: steps.default.next})
    }
    const step = steps[routeName]

    if (!"missedSignupPartsRedirect" in step) {
      return true;
    }
    for (let signupPart in step["missedSignupPartsRedirect"]) {
      if (!store.getters["signup/"+signupPart]) {
        redirect({name:step["missedSignupPartsRedirect"][signupPart]})
      }
    }

    return true;
  }

  const getNextStepName = (routeName) => {
    const steps = stepsManager.getSteps(store);

    if (!routeName) {
      return steps.default.next;
    }

    if (!routeName in steps) {
      return steps.default.next
    }

    if (!"next" in steps[routeName]) {
      return steps[routeName]
    }

    return steps[routeName].next
  }

  const toNextStep = (currentStepName) => {
    redirect({name:getNextStepName(currentStepName)})
  }

  inject('signupFlow', {
    toNextStep,
    validateMissedSignupParts
  })
}

export default signupFlow
