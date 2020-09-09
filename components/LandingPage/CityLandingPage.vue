<template>
  <section>
    <h1> {{city.name}} city landing page</h1>
    <p>Check <nuxt-link to="/pricing">prices</nuxt-link></p>
  </section>
</template>

<script>
export default {
name: "CityLandingPage",
  props: ['city']
}
</script>

<style scoped>

</style>
