<template>
  <section>
    <h1 v-if="type===''">Landing page loader...</h1>
    <CityLandingPage v-else-if="this.type==='city'" v-bind:city="object" />
    <CompanyLandingPage v-else-if="this.type==='company'" v-bind:company="object" />
  </section>
</template>

<script>
import CityLandingPage from "~/components/LandingPage/CityLandingPage";
import landingPageRepository from "~/modules/landingPage/landingPageRepository";
import {mapGetters} from 'vuex';
import CompanyLandingPage from "~/components/LandingPage/CompanyLandingPage";
import cityRepository from "~/modules/city/cityRepository";

export default {
  name: "landingPage",
  components: {CompanyLandingPage, CityLandingPage},
  computed: {
    ...mapGetters({
      type: 'landingPage/type',
      object: 'landingPage/object'
    })
  },


  async asyncData({store, params, error}) {
    const slug = params['landingPage'].toLowerCase()

    // no need to load more if landing page in the store and equal to current slug
    if (store.getters["landingPage/slug"] && store.getters["landingPage/slug"] === slug) {
      return true
    }
    console.log('loading from backend');
    const landingPage = await landingPageRepository.loadBySlug(params['landingPage'])

    if (typeof landingPage === 'object') {
      store.commit('landingPage/setSlug', params['landingPage'])
      store.commit('landingPage/setType', landingPage.type)
      store.commit('landingPage/setObject', landingPage.object)

      if (landingPage.type === 'city' && landingPage.object.slug) {
        store.commit('signup/setCityObject', landingPage.object)
      }

      if (landingPage.type === 'company' && landingPage.object.slug) {
        store.commit('signup/setCompany', landingPage.object.slug)

        if (landingPage.object.defaultCitySlug) {
          const cityObj = await cityRepository.getBySlug(landingPage.object.defaultCitySlug)
          store.commit('signup/setCityObject', cityObj)
        }

        if (landingPage.object.defaultProduct) {
          store.commit('signup/setProduct', landingPage.object.defaultProduct)
        }
      }
    } else {
      error({statusCode: 404, statusMessage: 'Landing page not found'})
    }
  }

}
</script>

<style scoped>

</style>
