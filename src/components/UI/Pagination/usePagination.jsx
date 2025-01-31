import {useState} from "react";

const usePagination = ({ catalog, maxNumberCards }) => {
  const [activeBtn, setActiveBtn] = useState(1);
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(catalog / maxNumberCards); i++) {
    pageNumbers.push(i)
  }

  return (
    {
      activeBtn,
      setActiveBtn,
      pageNumbers
    }
  )
}

export default usePagination;