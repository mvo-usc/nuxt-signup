<template>
<section>
  <h1>Success</h1>
</section>
</template>

<script>
export default {
  name: "success",
  validate({route, $signupFlow}) {
    return $signupFlow.validateMissedSignupParts(route.name)
  },
}
</script>

<style scoped>

</style>
