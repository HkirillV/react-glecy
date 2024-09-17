import classNames from "classnames";

import './Button.scss'
import button from "@/components/UI/Button/index.js";

const Button = (props) => {
  const {
    className = "button",
    children,
    onClick,
    isActive,
    type = "button",
  } = props;

  return (
    <button
      className={classNames(className, {
        'is-active-btn': isActive,
      })}
      type={type}
      onClick={onClick}>{children}</button>
  )
}

export default Button