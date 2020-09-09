import {cities} from "@/data/database"
import sleepRandom from "~/modules/helpers";
const cityRepository = () => {
  const  getBySlug = async (slug) => {
    await sleepRandom()
    if (slug in cities) {
      return cities[slug]
    }
  }

  const getList = async () => {
    await sleepRandom()
    return cities
  }

  return {
    getBySlug,
    getList
  }
}

export default cityRepository()
