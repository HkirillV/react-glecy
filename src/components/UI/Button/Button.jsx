import classNames from "classnames";
import {Link} from "react-router-dom";
import './Button.scss'

const Button = (props) => {
  const {
    className,
    children,
    onClick,
    type = "button",
    href,
    target,
  } = props;

  const linkProps = {target}
  const buttonProps = {type, onClick}

  const isLink = Boolean(href);
  const isRegularLink = href?.startsWith("http") || href?.startsWith("www.")

  if (isLink) {
    if (isRegularLink) {
      linkProps.href = href
    } else {
      linkProps.to = href
    }
  }

  const Component = isLink ? (isRegularLink ? "a" : Link) : "button"
  const specificProps = isLink ? linkProps : buttonProps
  return (
    <Component
      className={classNames(className, "button")}
      {...specificProps}
    >
      {children}
    </Component>
  )
}

export default Button