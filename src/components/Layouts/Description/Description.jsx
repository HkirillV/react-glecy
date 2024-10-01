import "./Description.scss";

const Description = () => {
  return (
    <div className="description">
      <div className="description__inner">
        <h3 className="description__title">Магазин Глейси – это онлайн и офлайн-магазин по продаже мороженого
          собственного производства на развес</h3>
        <ul className="description__list">
          <li className="description__item">
            <img className="description__icon" src="/src/assets/icons/description/мороженое.svg" width="48" height="48" loading="lazy" alt=""/>
            <p className="description__text">Всё наше мороженое изготавливается на собственном производстве с использованием современного оборудования и проверенных временем технологий.</p>
          </li>
          <li className="description__item">
            <img className="description__icon" src="/src/assets/icons/description/корова.svg" width="48" height="48" loading="lazy" alt=""/>
            <p className="description__text">Закупка ингредиентов производится только
              у проверенных фермерских хозяйств, с которыми
              нас связывает долговременное сотрудничество.</p>
          </li>
          <li className="description__item">
            <img className="description__icon" src="/src/assets/icons/description/листик.svg" width="48" height="48" loading="lazy" alt=""/>
            <p className="description__text">Для приготовления мороженого используются сливки и молоко высочайшего качества. Все ингредиенты
              и добавки произведены из натурального сырья.</p>
          </li>
          <li className="description__item">
            <img className="description__icon" src="/src/assets/icons/description/градусник.svg" width="48" height="48" loading="lazy" alt=""/>
            <p className="description__text">Доставка нашего мороженого осуществляется в специальном термопаке, который не даёт мороженому растаять и позволяет сохранить превосходный вкус.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Description