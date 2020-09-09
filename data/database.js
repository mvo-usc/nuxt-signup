// database emulation
export const cities = {
  amsterdam: {slug: "amsterdam", name: "Amsterdam", country: 'NL'},
  haarlem: {slug: "haarlem", name: "Haarlem", country: 'NL'},
  berlin: {slug: "berlin", name: "Berlin", country: 'DE'}
}

export const companies = {
    google: {name:'Google', slug: 'google'},
    usc: {name:'UrbanSportsClub', slug: 'usc', defaultCitySlug: 'berlin'},
    uscM: {name:'UrbanSportsClub - prefilled M', slug: 'usc', defaultCitySlug: 'berlin', defaultProduct: 'M'},
}

export const products = {
  amsterdam: {lite: {name:'lite', price:'32,50'}, original:{name:'original', price:'65'}},
  haarlem: {lite: {name:'lite', price:'29,95'}, original: {name:'original', price:'59,95'}},
  berlin: {S:{name:'S', price:'29'}, M: {name:'M', price:'59'}, L:{name:'L', price:'99'}, XL:{name:'XL', price:'129'},},
  google: {S:{name:'S', price:'29'}, M: {name:'M', price:'49'}, L:{name:'L', price:'89'}, XL:{name:'XL', price:'116'},},
  usc: {S:{name:'S', price:'0'}, M: {name:'M', price:'0'}, L:{name:'L', price:'0'}, XL:{name:'XL', price:'0'},},
}
