import classNames from "classnames";

import "./Input.scss"

const Input = (props) => {
  const {
    className,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    min,
    max,
  } = props

  return (
    <input
      className={classNames(className, "input")}
      type={type}
      name={name}
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      placeholder={placeholder}
    />
  )
}

export default Input