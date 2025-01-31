import axiosClient from "@/api/axiosClient";

const catalogAPI = {
  getProducts: async ({ categorySort, price, fat, fillers }) => {
    const params = new URLSearchParams({});

    if (categorySort !== "") {
      params.append("_sort", categorySort);
      params.append("_order", "asc");
    }

    if (price.length > 0) {
      const minPrice = Math.min(...price);
      const maxPrice = Math.max(...price);

      params.append('price_gte', String(minPrice));
      params.append('price_lte', String(maxPrice));
    }

    if (fat.length > 0) {
      if (fat === "0") {
        params.append("fat_lte", "0");
      } else if (fat === "10") {
        params.append("fat_lte", "10");
      } else if (fat === "30") {
        params.append("fat_lte", "30");
      } else if (fat === "31") {
        params.append("fat_lte", "31");
      }
    }

    if (fillers.length > 0) {
      fillers.forEach(filler => {
        params.append("fillers", filler);
      });
    }

    return axiosClient.get(`/cards?${params}`).then(({ data }) => data);
  },


  getCatalogHome: async () => {
    return axiosClient.get("/catalogHome").then(({data}) => data);
  },
  getCatalogCrumbs: async () => {
    return axiosClient.get("/crumbs").then(({data}) => data);
  },
  getDropDown: async () => {
    return axiosClient.get("/dropdown").then(({data}) => data);
  },
  getFilterFat: async () => {
    return axiosClient.get("/fats").then(({data}) => data);
  },
  getFilterFillers: async () => {
    return axiosClient.get("/fillers").then(({data}) => data);
  },
  getFilterSorts: async () => {
    return axiosClient.get("/sorts").then(({data}) => data);
  },
  getDescriptions: async () => {
    return axiosClient.get("/descriptions").then(({data}) => data);
  },
  getPromo: async () => {
    return axiosClient.get("/promo").then(({data}) => data);
  }
}

export default catalogAPI