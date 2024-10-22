import Button from "@/components/UI/Button"
import Input from "@/components/UI/Input"

import "./Feed.scss"

const Feed = () => {
  return (
    <div className="feed">
      <div className="feed__news news">
        <p className="news__info">Новое в нашем блоге</p>
        <h4 className="news__title">10 способов сервировки фруктовых щербетов к столу</h4>
      </div>
      <div className="feed__subscription subscription">
        <div className="subscription__inner">
          <p className="subscription__info">Подпишитесь на нашу сладкую рассылку и будьте всегда
            в курсе всего самого вкусного, что у нас происходит. Обещаем не спамить и не слать всякой ненужной ерунды.
            Честно =)</p>
          <form className="subscription__form">
            <label className="subscription__form-label">
              <Input className="subscription__input" type="email" name="email" placeholder="email@example.com"/>
            </label>
            <Button className="subscription__button button" type="submit">Отправить</Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Feed;