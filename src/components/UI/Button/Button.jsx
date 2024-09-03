import classNames from "classnames";

import './Button.scss'
import button from "@/components/UI/Button/index.js";

const Button = (props) => {
  const {
    className,
    children,
    onClick,
    isActive,
    type
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