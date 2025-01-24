export const getBasketToCache = () => {
  const basket = localStorage.getItem("basket")
  return basket ? JSON.parse(basket) : []
}

export const setBasketToCache = (value) => {
  localStorage.setItem("basket", JSON.stringify(value))
}
