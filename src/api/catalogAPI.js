import axiosClient from "@/api/axiosClient.js";

const catalogAPI = {
  getProducts: async () => {
    return axiosClient.get("/cards").then(({data}) => data);
  },
  getCatalogHome: async () => {
    return axiosClient.get("/catalogHome").then(({data}) => data);
  },
  getCatalogPage: async () => {
    return axiosClient.get("/catalogPage").then(({data}) => data);
  },
  getCatalogCrumbs: async () => {
    return axiosClient.get("/crumbs").then(({data}) => data);
  },
  getDropDown: async () => {
    return axiosClient.get("/dropdown").then(({data}) => data);
  },
  getFilterFat: async () => {
    return axiosClient.get("/filterFat").then(({data}) => data);
  }
}

export default catalogAPI