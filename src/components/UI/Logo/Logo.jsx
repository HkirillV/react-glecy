import classNames from "classnames";
import {Link} from "react-router-dom";
import "./Logo.scss"

const Logo = (props) => {
  const {
    className
  } = props

  return (
    <Link className={classNames(className, "logo")} to="/">
      <img src="/src/assets/icons/header/logo.svg"
           width="137"
           height="56"
           loading="lazy"
           alt=""/>
    </Link>
  )
}

export default Logo