<template>
  <section>
    <h1>Enter code</h1>
    <form method="post" @submit.prevent="onSubmit">
      <div class="form-group row">
        <label for="signup_code" class="col-sm-1 col-form-label">Code</label>
        <div class="col-sm-4">
          <input type="text" id="signup_code" class="form-control" name="code" v-model="code"/>
        </div>
      </div>

      <button class="btn btn-primary" :disabled="disabledButton===true" type="submit" name="action">Submit
      </button>
    </form>
  </section>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "phone-validation",
  validate({route, $signupFlow}) {
    return $signupFlow.validateMissedSignupParts(route.name)
  },
  methods: {
    ...mapMutations({
      setPhoneValid: 'signup/setPhoneValid'
    }),
    onSubmit(e) {
      const isValid = this.code.trim() !== ''
      this.setPhoneValid(isValid)

      this.$signupFlow.toNextStep(this.$route.name)
    }
  },
  data() {
    return {
      code: ''
    }
  },
  computed:{
    disabledButton() {
      return this.code.trim() === ''
    }
  }
}
</script>
