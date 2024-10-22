import Button from "@/components/UI/Button";
import Input from "@/components/UI/Input";
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
        <label className="dialog__form-label">
          <Input className="dialog__form-input" name="name" placeholder="Имя и фамилия"/>
        </label>
        <label className="dialog__form-label">
          <Input className="dialog__form-input" type="email" placeholder="email@example.com"/>
        </label>
        <label className="dialog__form-label">
            <textarea className="dialog__form-input dialog__form-input_modifier" name="message" rows="10" cols="45"
                      placeholder="В свободной форме"></textarea>
        </label>
        <Button className="dialog__form-button button" type="submit" onClick={onClick}>Отправить</Button>
      </form>
    </dialog>
  )
}

export default Dialog;