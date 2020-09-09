import {companies} from "@/data/database"
import sleepRandom from "~/modules/helpers";
// very backend, not interaction

const companyRepository = () =>{
  const getBySlug = async (slug) => {
    await sleepRandom()

    if (slug in companies) {
      return companies[slug]
    }
  }

  return {
    getBySlug
  }
}

export default companyRepository()
