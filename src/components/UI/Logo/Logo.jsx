import classNames from "classnames";
import './Logo.scss'

const Logo = (props) => {
  const {
    className
  } = props

  return (
    <a className={classNames(className, "logo")} href="/">
      <img src="/src/assets/icons/header/logo.svg"
           width="137"
           height="56"
           loading="lazy"
           alt=""/>
    </a>
  )
}

export default Logo