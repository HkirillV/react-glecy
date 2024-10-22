import "./NotFound.scss"
import {Link} from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found">
      <h3 className="not-found__title">404 - Страница не найдена</h3>
      <p className="not-found__subtitle">Страница на которую вы попали, не существует. Вы можете попробовать следующее:</p>
      <ul className="not-found__list">
        <li className="not-found__item">
          <Link className="not-found__link" to="/">Перейти к главной странице сайта</Link>
        </li>
        <li className="not-found__item">
          <p className="not-found__text">Проверить правильность введеного адреса</p>
        </li>
        <li className="not-found__item">
          <p className="not-found__text">Вернуться туда, откуда пришли (нажать кнопку <strong>"назад"</strong> в своем браузере)</p>
        </li>
      </ul>
    </div>
  )
}

export default NotFound;