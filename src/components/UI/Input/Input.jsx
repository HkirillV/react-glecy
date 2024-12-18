import classNames from "classnames";

import "./Input.scss"

const Input = (props) => {
  const {
    className,
    type = "text",
    name,
    value,
    defaultValue,
    onChange,
    onClick,
    placeholder,
    min,
    max,
    step,
  } = props

  return (
    <input
      className={classNames(className, "input")}
      type={type}
      name={name}
      value={value}
      defaultValue={defaultValue}
      min={min}
      max={max}
      step={step}
      onChange={onChange}
      onClick={onClick}
      placeholder={placeholder}
    />
  )
}

export default Input