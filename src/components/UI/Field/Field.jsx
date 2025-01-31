import Input from "@/components/UI/Input";
import "./Field.scss"

const Field = (props) => {
  const {
    className,
    type = "text",
    name,
    value,
    children,
    placeholder,
  } = props

  return (
    <div className="field">
      <label className="field__label">
        {children}
        <Input className={className} type={type} name={name} placeholder={placeholder}/>
      </label>
    </div>
  )
}

export default Field