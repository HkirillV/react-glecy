import Button from "@/components/UI/Button";
import "./Footer.scss"

const socials = [
  {
    iconName: "telegram",
    href: "https://t.me",
  },
  {
    iconName: "vk",
    href: "https://vk.com",
  },
  {
    iconName: "youtube",
    href: "https://youtube.com",
  }
]

const Footer = () => {

  return (
    <footer className="footer">
      <ul className="footer__social-list">
        {socials.map(({iconName, href}, index) => (
          <li className="footer__social-item" key={index}>
            <Button className="footer__social-link" href={href} target="_blank" >
              <img className="footer__social-icon" src={`/src/assets/icons/footer/${iconName}.svg`} alt=""/>
            </Button>
          </li>
        ))}
      </ul>
      <ul className="footer__main-list">
        <li className="footer__main-item">
          <svg className="footer__main-item-icon" width="16" height="16" viewBox="0 0 16 16" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.8909 2.99447C13.5504 2.65381 13.1461 2.38357 12.7011 2.19919C12.2562 2.01482 11.7792 1.91992 11.2976 1.91992C10.8159 1.91992 10.339 2.01482 9.89399 2.19919C9.44901 2.38357 9.04473 2.65381 8.70422 2.99447L7.99756 3.70114L7.29089 2.99447C6.6031 2.30668 5.67025 1.92028 4.69756 1.92028C3.72487 1.92028 2.79202 2.30668 2.10422 2.99447C1.41643 3.68227 1.03003 4.61512 1.03003 5.58781C1.03003 6.56049 1.41643 7.49334 2.10422 8.18114L2.81089 8.88781L7.99756 14.0745L13.1842 8.88781L13.8909 8.18114C14.2316 7.84064 14.5018 7.43635 14.6862 6.99138C14.8705 6.5464 14.9654 6.06946 14.9654 5.58781C14.9654 5.10615 14.8705 4.62921 14.6862 4.18424C14.5018 3.73926 14.2316 3.33498 13.8909 2.99447Z"
              fill="#2D3440"/>
          </svg>
          <Button className="footer__social-link" href="/">
            Для поставщиков</Button>
        </li>
        <li className="footer__main-item">
          <Button className="footer__social-link" href="/">Наши документы</Button>
        </li>
        <li className="footer__main-item">
          <a className="footer__social-link" href="/index.html">О производстве</a>
        </li>
        <li className="footer__main-item">
          <Button className="footer__social-link" href="/">Экологические стандарты</Button>
        </li>
      </ul>
      <div className="footer__copyright">
        <Button href="https://t.me/khlebov79" target="_blank">Сделал kirill khlebov © 2024</Button>
      </div>
    </footer>
  )
}

export default Footer