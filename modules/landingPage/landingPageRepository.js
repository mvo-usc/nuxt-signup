import cityRepository from "~/modules/city/cityRepository";
import companyRepository from "~/modules/company/companyRepository";
// interaction with backend. should be api call instead
const landingPageRepository = () => {
  const loadBySlug = async (slug) => {
    const cityObj = await cityRepository.getBySlug(slug)

    if (typeof cityObj === 'object' ) {
      return {
        type: 'city',
        object: cityObj
      }
    }

    const companyObj = await companyRepository.getBySlug(slug)
    if (typeof companyObj === 'object') {
      return {
        type: 'company',
        object: companyObj
      }
    }

  }

  return {
    loadBySlug
  }
}

export default landingPageRepository()
