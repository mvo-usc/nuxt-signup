<template>
<section v-if="signupCompany">
  <p>Current company: {{signupCompany}}</p>
</section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "CompanyHelper",
  computed: {
    ...mapGetters({
      signupCompany: 'signup/company'
    })
  },
}
</script>

<style scoped>

</style>
