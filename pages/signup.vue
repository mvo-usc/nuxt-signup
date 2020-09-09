<template>
  <section>
    <h1>Signup</h1>
    <form @submit.prevent="onSubmit" method="post">
      <div class="form-group row">
        <label for="signup_email" class="col-sm-1 col-form-label">Email</label>
        <div class="col-sm-4">
          <input type="text" id="signup_email" class="form-control" name="email" v-model="email"/>
        </div>
      </div>

      <div class="form-group row">
        <label for="signup_password" class="col-sm-1 col-form-label">Password</label>
        <div class="col-sm-4">
          <input type="password" id="signup_password" class="form-control" name="password" v-model="password"/>
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
  name: "signup",
  computed: {
    ...mapGetters({
      signupProduct: 'signup/product',
    }),
    disabledButton() {
      return this.email.trim() ==='' || this.password.trim() === ''
    }
  },
  validate({store, redirect}) {
    if (store.getters['signup/product']) {
      return true
    }
    redirect({name:'pricing'})
  },
  methods: {
    ...mapMutations({setEmail: 'signup/setEmail'}),
    onSubmit() {
      const email = this.email;
      this.email = ''
      this.password = ''
      this.setEmail(email)
      this.$signupFlow.toNextStep(this.$route.name)
    }
  },
  data(){
    return {
      email: '',
      password: '',
    }
  },
}
</script>

<style scoped>

</style>
