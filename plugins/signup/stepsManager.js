const stepsManager = () => {
  const DEFAULT_STEPS = {
    "default": {next: "pricing"},
    "pricing": {next: "signup"},
    "signup": {
      next: "phone",
      missedSignupPartsRedirect: {
        "product": "pricing",
        "city": "pricing"
      }
    },
    "phone": {
      next: "phone-validation",
      missedSignupPartsRedirect: {
        "product": "pricing",
        "city": "pricing",
        "email": "signup"
      }
    },
    "phone-validation": {
      next: "success",
      missedSignupPartsRedirect: {
        "product": "pricing",
        "city": "pricing",
        "email": "signup",
        "phone": "phone"
      }
    },
    "success": {
      missedSignupPartsRedirect: {
        "product": "pricing",
        "city": "pricing",
        "email": "signup",
        "phone": "phone",
        "isValidPhone": "phone-validation"
      }
    }
  }

  const SKIPPED_PHONE_VALIDATION_STEPS = {
    "default": {next: "pricing"},
    "pricing": {next: "signup"},
    "signup": {
      next: "success",
      missedSignupPartsRedirect: {
        "product": "pricing",
        "city": "pricing"
      }
    },
    "success": {
      missedSignupPartsRedirect: {
        "product": "pricing",
        "city": "pricing",
        "email": "signup",
      }
    }
  }

  const getSteps = (store) => {
    if (store.getters["signup/company"] && store.getters["signup/country"] === "DE") {
      return SKIPPED_PHONE_VALIDATION_STEPS
    }

    return DEFAULT_STEPS
  }

  return {
    getSteps
  }
}
export default stepsManager()
