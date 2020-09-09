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
    ...mapMutations({setCity: 'signup/setCity'}),
    changeCity() {
      this.setCity('')
    }
  },
}
</script>

<style scoped>

</style>
