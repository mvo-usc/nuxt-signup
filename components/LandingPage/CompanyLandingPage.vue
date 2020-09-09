<template>
  <section>
    <h1>Company {{ company.name }} landing page</h1>
    <p v-if="signupProduct">You have already selected product '{{signupProduct}}'
      now you can <nuxt-link to="/signup">signup</nuxt-link>
    </p>
    <p>Check <nuxt-link to="/pricing">prices</nuxt-link></p>

  </section>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";

export default {
  name: "CompanyLandingPage",
  props: ['company'],
  computed: {
    ...mapGetters({
      signupProduct: 'signup/product'
    })
  },

}
</script>

<style scoped>

</style>
