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
    ...mapMutations({setCity: 'signup/setCity'}),
    onCitySelect(e) {
      //console.log('selected', e.target.getAttribute('slug'))
      this.setCity(e.target.getAttribute('slug'))
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
