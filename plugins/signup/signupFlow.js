import stepsManager from "~/plugins/signup/stepsManager";

const signupFlow = ({store, redirect}, inject) => {

  const getNextStepName = (routeName) => {
    const steps = stepsManager.getSteps(store);

    if (!routeName) {
      return steps[0];
    }
    const currentStepIndex = steps.indexOf(routeName)
    if (currentStepIndex === -1) {
      return steps[0];
    }

    if (currentStepIndex === steps.length -1) {
      return steps[currentStepIndex]
    }

    return steps[currentStepIndex+1]
  }

  const toNextStep = (currentStepName) => {
    redirect({name:getNextStepName(currentStepName)})
  }

  inject('signupFlow', {
    toNextStep
  })
}

export default signupFlow
