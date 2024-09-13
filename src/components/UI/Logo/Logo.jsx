import './Logo.scss'

const Logo = (props) => {
  const {
    className
  } = props

  return (
    <a className={className} href="index.html"><img src="/src/assets/icons/header/logo.svg"
                                                width="137"
                                                height="56" loading="lazy" alt=""/></a>
  )
}

export default Logo