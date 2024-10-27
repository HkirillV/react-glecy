import { v4 as uuidv4 } from 'uuid';

const addWithIdElement = (elements) => {
    return elements.map((element) => (
      {
        ...element,
        id: uuidv4(),
      }
    ))
}

export default addWithIdElement