<template>
  <div>
    <p>Current city is: {{this.signupCity}} (<a href="#" @click.prevent="changeCity">change</a>)</p>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
name: "CurrentCity",
  props: {
  signupCity: {
    type: String,
    require: true
  }},
  methods: {
    ...mapMutations({setCityObject: 'signup/setCityObject'}),
    changeCity() {
      console.log('change city')
      this.setCityObject({})
    }
  },
}
</script>

<style scoped>

</style>
