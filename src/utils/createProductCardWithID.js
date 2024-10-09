import { v4 as uuidv4 } from 'uuid';

const createProductCardWithID = (cards) => {
    return cards.map((card) => (
      {
        ...card,
        id: uuidv4(),
      }
    ))
}

export default createProductCardWithID