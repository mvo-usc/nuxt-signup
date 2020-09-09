<template>
  <section>
    <CurrentCity v-if="this.signupCity" v-bind:signupCity="this.signupCity" />
    <CitySelector v-else />

  </section>
</template>

<script>
import {mapGetters} from "vuex";

import CurrentCity from "~/components/City/CurrentCity";
import CitySelector from "~/components/City/CitySelector";

export default {
  name: "CityHelper",
  components: {CitySelector, CurrentCity},
  computed: {
    ...mapGetters({
      signupCity: 'signup/city'
    })
  },
}
</script>

<style scoped>

</style>
