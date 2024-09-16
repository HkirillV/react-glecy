import axiosClient from "@/api/axiosClient.js";

const catalogAPI = {
  getProducts: async () => {
    return axiosClient.get("/cards").then(({data}) => data);
  }
}

export default catalogAPI