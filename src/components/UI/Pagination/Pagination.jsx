import "./Pagination.scss"

const Pagination = ({maxNumberCards, catalog}) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(catalog / maxNumberCards); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="pagination">
      <ul className="pagination__list">
        {
          pageNumbers.map((number) => (
            <li className="pagination__item" key={number}>
              {number}
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Pagination