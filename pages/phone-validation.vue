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
  validate({store, redirect}) {
    // if (!store.getters['signup/product'] || !store.getters['signup/city']) {
    //   redirect({name:'pricing'})
    // } else if (!store.getters['signup/email']) {
    //   redirect({name:'signup'})
    // } else if (!store.getters['signup/phone']) {
    //   redirect({name:'phone'})
    // }
    return true
  },
  methods: {
    ...mapMutations({
      setPhoneValid: 'signup/setPhoneValid'
    }),
    onSubmit(e) {
      const isValid = this.code.trim() !== ''
      this.setPhoneValid(isValid)
      this.$router.push({name:'success'})
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
