<template>
  <section v-if="Object.keys(this.products).length > 0">
    <h4>Select product</h4>
    <ul>
      <li v-for="product in products">
        <a href="#" @click.prevent="onProductSelected" v-bind:name="product.name">
          {{product.name}} for {{product.price}}
        </a>
      </li>
    </ul>
  </section>
  <h4 v-else>Loading...</h4>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import productRepository from "~/modules/product/productRepository";

export default {
  name: "ProductSelector",
  computed: {
    ...mapGetters({
      signupCity: 'signup/city',
      signupCompany: 'signup/company'
    }),
  },
  data() {
    return {
      products: {}
    }
  },
  async mounted() {
    if (this.signupCompany) {
      this.products = await productRepository.getCompanyProduct(this.signupCompany)
    } else {
      this.products = await productRepository.getCityProduct(this.signupCity)
    }
  },
  methods: {
    ...mapMutations({
      setProduct: 'signup/setProduct',
    }),
    onProductSelected(e) {
      this.setProduct(e.target.getAttribute('name'))
      this.$emit('product-chosen')
    }
  }
}
</script>

<style scoped>

</style>
