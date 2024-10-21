import { v4 as uuidv4 } from 'uuid';

const getProductsCardWithID = (cards) => {
    return cards.map((card) => (
      {
        ...card,
        id: uuidv4(),
      }
    ))
}

export default getProductsCardWithID