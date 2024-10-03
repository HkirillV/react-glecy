import classNames from "classnames";

import "./Input.scss"

const Input = (props) => {
  const {
    className,
    type = "text",
    value,
    onChange,
    placeholder
  } = props

  return (
    <input
      className={classNames(className, "input")}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input