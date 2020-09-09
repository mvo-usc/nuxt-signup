<template>
<section>
  <div v-if="Object.keys(cities).length > 0">
    <h4>Select city</h4>
    <ul>
      <li v-for="city in cities">
        <a href="#" v-bind:slug="city.slug" @click.prevent="onCitySelect">{{city.name}}</a>
      </li>
    </ul>
  </div>
  <h4 v-else>Loading...</h4>
</section>
</template>

<script>
import cityRepository from "~/modules/city/cityRepository";
import {mapMutations} from "vuex";

export default {
  name: "CitySelector",
  methods: {
    ...mapMutations({setCityObject: 'signup/setCityObject'}),
    async onCitySelect(e) {
      const cityObj = await cityRepository.getBySlug(e.target.getAttribute('slug'))
      if (cityObj) {
        this.setCityObject(cityObj)
      }
    }
  },
  data() {
    return {
      cities: {}
    }
  },
  async mounted() {
    this.cities = await cityRepository.getList();
  },
}
</script>

<style scoped>

</style>
