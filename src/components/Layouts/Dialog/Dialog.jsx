import Button from "@/components/UI/Button";
import Field from "@/components/UI/Field";

import "./Dialog.scss"

const Dialog = (props) => {
  const {
    onClick,
    feedbackForm,
  } = props

  return (
    <dialog className="dialog" open={feedbackForm}>
      <Button className="dialog-button mobile-overlay__close-button cross-button" onClick={onClick}>
        <span className="visually-hidden">Close feedback form</span>
      </Button>
      <h4 className="dialog__title">Мы обязательно ответим вам!</h4>
      <form className="dialog__form">
        <Field className="dialog__form-input" name="name" placeholder="Имя и фамилия"/>
        <Field className="dialog__form-input" type="email" name="email" placeholder="email@example.com"/>
        <label className="dialog__form-label">
            <textarea
              className="dialog__form-input dialog__form-input_modifier"
              name="message"
              rows="10"
              cols="45"
              placeholder="В свободной форме"></textarea>
        </label>
        <Button className="dialog__form-button button" type="submit" onClick={onClick}>Отправить</Button>
      </form>
    </dialog>
  )
}

export default Dialog;