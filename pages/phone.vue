<template>
<section>
  <h1>Enter phone number</h1>
  <form method="post" @submit.prevent="onSubmit">
    <div class="form-group row">
      <label for="signup_phone" class="col-sm-1 col-form-label">Phone</label>
      <div class="col-sm-4">
        <input type="text" id="signup_phone" class="form-control" name="phone" v-model="phone"/>
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
  name: "phone",
  validate({route, $signupFlow}) {
    return $signupFlow.validateMissedSignupParts(route.name)
  },
  methods: {
    ...mapMutations({
      setPhone: 'signup/setPhone'
    }),
    onSubmit(e) {
      this.setPhone(this.phone)
      this.$signupFlow.toNextStep(this.$route.name)
    }
  },
  data() {
    return {
      phone: ''
    }
  },
  computed:{
    disabledButton() {
      return this.phone.trim() === ''
    }
  }
}
</script>

