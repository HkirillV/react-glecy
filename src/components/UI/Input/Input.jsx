import classNames from "classnames";

import "./Input.scss"

const Input = (props) => {
  const {
    className,
    type = "text",
    name,
    value,
    onChange,
    placeholder
  } = props

  return (
    <input
      className={classNames(className, "input")}
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input