import {products} from "@/data/database"
import sleepRandom from "~/modules/helpers";

const productRepository = () => {
  const getProductsBySlug = async (slug) => {
    await sleepRandom()
    if (slug in products) {
      return products[slug]
    }
    return {}
  }

  const getCityProduct = async (slug) => {
    return await getProductsBySlug(slug)
  }

  const getCompanyProduct = async (slug) => {
    return await getProductsBySlug(slug)
  }


  return {
    getCityProduct,
    getCompanyProduct
  }
}

export default productRepository()
