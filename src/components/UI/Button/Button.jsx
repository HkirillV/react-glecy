import classNames from "classnames";

import './Button.scss'

const Button = (props) => {
  const {
    className,
    children,
    onClick,
    type,
  } = props;

  return (
    <button
      className={classNames(className, "button")}
      type={type}
      onClick={onClick}>{children}</button>
  )
}

export default Button