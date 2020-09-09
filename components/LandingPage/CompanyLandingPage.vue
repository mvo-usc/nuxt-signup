<template>
  <section>
    <h1>Company {{ company.name }} landing page</h1>
    <p>Check <nuxt-link to="/pricing">prices</nuxt-link></p>

  </section>
</template>

<script>
export default {
  name: "CompanyLandingPage",
  props: ['company']
}
</script>

<style scoped>

</style>
