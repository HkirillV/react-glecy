import {useState} from 'react'
import {Navigation, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from "swiper/react";
import {Controller} from 'swiper/modules';
import Button from '@/components/UI/Button';

import 'swiper/scss';
import 'swiper/css/bundle'
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './Slide.scss'

const Slide = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  return (
    <div className="slide">
      <Swiper
        modules={[Navigation, Pagination, Controller]}
        onSwiper={setFirstSwiper}
        loop={true}
        controller={{control: secondSwiper}}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{clickable: true}}
        speed={700}
      >
        <SwiperSlide>
          <div className="slide__inner">
            <div className="slide__inner-wrapper">
              <h2 className="slide__inner-title">Нежный пломбир <br/> с клубничным джемом</h2>
              <p className="slide__inner-description">
                Натуральное мороженое из свежих сливок
                и молока с вкуснейшим клубничным джемом –
                это идеальный десерт для всей семьи.
              </p>
              <Button className="slide__inner-button">Заказать</Button>
            </div>
            <div className="slide__inner-image-wrapper">
              <img className="slide__inner-image"
                   src="/src/assets/images/slide/мороженое_1.png"
                   width="312"
                   height="507"
                   loading="lazy"
                   alt=""/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__inner">
            <div className="slide__inner-wrapper">
              <h2 className="slide__inner-title">Сливочное мороженое <br/> со вкусом банана</h2>
              <p className="slide__inner-description">Сливочное мороженое с ярким банановым вкусом подарит вам свежесть и
                наслаждение даже в самый жаркий летний день.</p>
              <Button className="slide__inner-button">Заказать</Button>
            </div>
            <div className="slide__inner-image-wrapper">
              <img className="slide__inner-image"
                   src="/src/assets/images/slide/мороженое_2.png"
                   width="312"
                   height="507"
                   loading="lazy"
                   alt=""/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__inner">
            <div className="slide__inner-wrapper">
              <h2 className="slide__inner-title">Карамельный плобир <br/> с маршмеллоу</h2>
              <p className="slide__inner-description">Необычный сладкий десерт с карамельным топпингом и кусочками зефира
                завоюет
                сердца сладкоежек всех возрастов.</p>
              <Button className="slide__inner-button">Заказать</Button>
            </div>
            <div className="slide__inner-image-wrapper">
              <img className="slide__inner-image"
                   src="/src/assets/images/slide/мороженое_3.png"
                   width="312"
                   height="507"
                   loading="lazy"
                   alt=""/>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        className="sub-slide hidden-desktop"
        modules={[Controller]}
        loop={true}
        onSwiper={setSecondSwiper}
        controller={{control: firstSwiper}}
        spaceBetween={30}
        slidesPerView={2}
        allowTouchMove={false}

        speed={700}
      >
        <SwiperSlide className="sub-slide__item">
          <div className="sub-slide__wrapper">
            <img className="sub-slide__image"
                 src="/src/assets/images/slide/subslide/мороженое_3.png"
                 width="66"
                 height="150"
                 loading="lazy"
                 alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sub-slide__item">
          <div className="sub-slide__wrapper">
            <img className="sub-slide__image"
                 src="/src/assets/images/slide/subslide/мороженое_2.png"
                 width="66"
                 height="150"
                 loading="lazy"
                 alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sub-slide__item">
          <div className="sub-slide__wrapper">
            <img className="sub-slide__image"
                 src="/src/assets/images/slide/subslide/мороженое_1.png"
                 width="66"
                 height="150"
                 loading="lazy"
                 alt=""/>
          </div>
        </SwiperSlide>
        <ul className="sub-slide__social-list">
          <li className="sub-slide__social-item">
            <a className="sub-slide__social-link" href="/index.html">
              <svg className="sub-slide__social-icon"
                   width="28"
                   height="28"
                   viewBox="0 0 24 24"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 12C24 18.627 18.627 24 12 24C5.373 24 0 18.627 0 12C0 5.373 5.373 0 12 0C18.627 0 24 5.373 24 12ZM12.43 8.859C11.263 9.344 8.93 10.349 5.432 11.873C4.864 12.099 4.566 12.32 4.539 12.536C4.493 12.902 4.951 13.046 5.573 13.241C5.658 13.268 5.746 13.295 5.836 13.325C6.449 13.524 7.273 13.757 7.701 13.766C8.09 13.774 8.524 13.614 9.003 13.286C12.271 11.079 13.958 9.964 14.064 9.94C14.139 9.923 14.243 9.901 14.313 9.964C14.383 10.026 14.376 10.144 14.369 10.176C14.323 10.369 12.529 12.038 11.599 12.902C11.309 13.171 11.104 13.362 11.062 13.406C10.968 13.503 10.872 13.596 10.78 13.685C10.21 14.233 9.784 14.645 10.804 15.317C11.294 15.64 11.686 15.907 12.077 16.173C12.504 16.464 12.93 16.754 13.482 17.116C13.622 17.208 13.756 17.303 13.887 17.396C14.384 17.751 14.831 18.069 15.383 18.019C15.703 17.989 16.035 17.688 16.203 16.789C16.6 14.663 17.382 10.059 17.563 8.161C17.574 8.00341 17.5673 7.84509 17.543 7.689C17.5285 7.56293 17.4671 7.44693 17.371 7.364C17.228 7.247 17.006 7.222 16.906 7.224C16.455 7.232 15.763 7.473 12.43 8.859Z"/>
              </svg>
            </a>
          </li>
          <li className="sub-slide__social-item">
            <a className="sub-slide__social-link" href="/index.html">
              <svg className="sub-slide__social-icon"
                   width="28"
                   height="28"
                   viewBox="0 0 24 24"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd"
                      d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.5884 14.9749H11.8711C11.8711 14.9749 10.2885 15.0584 8.89479 13.7867C7.37486 12.3995 6.03249 9.64702 6.03249 9.64702C6.03249 9.64702 5.95511 9.46654 6.03917 9.3793C6.13366 9.28121 6.39106 9.27493 6.39106 9.27493L8.10567 9.26508C8.10567 9.26508 8.26727 9.28878 8.38294 9.36317C8.47824 9.42457 8.53167 9.53936 8.53167 9.53936C8.53167 9.53936 8.80878 10.1536 9.17581 10.7093C9.89212 11.7942 10.2258 12.0315 10.469 11.9152C10.8233 11.7458 10.7171 10.3816 10.7171 10.3816C10.7171 10.3816 10.7236 9.88646 10.5387 9.66601C10.3955 9.4951 10.1254 9.44527 10.0062 9.43128C9.90971 9.42 10.0681 9.22367 10.2733 9.13558C10.5819 9.00308 11.1268 8.99551 11.7706 9.00136C12.2722 9.00579 12.4165 9.0332 12.6127 9.07475C13.0677 9.17105 13.0536 9.47963 13.0229 10.1454C13.0138 10.3444 13.0032 10.5752 13.0032 10.8418C13.0032 10.9018 13.0012 10.9657 12.9991 11.0315C12.9885 11.3725 12.9763 11.7629 13.2324 11.908C13.3637 11.9822 13.6849 11.9191 14.4884 10.7233C14.8693 10.1566 15.1549 9.49024 15.1549 9.49024C15.1549 9.49024 15.2173 9.37145 15.3142 9.32048C15.4134 9.26851 15.5472 9.2845 15.5472 9.2845L17.3515 9.27465C17.3515 9.27465 17.8937 9.21796 17.9815 9.43242C18.0735 9.65758 17.7788 10.1833 17.0417 11.0444C16.3463 11.8567 16.006 12.1587 16.0328 12.4236C16.0527 12.6198 16.2739 12.7957 16.7015 13.1436C17.5897 13.8661 17.8264 14.2455 17.8827 14.3357C17.8872 14.343 17.8906 14.3484 17.893 14.3519C18.2905 14.9296 17.4522 14.9749 17.4522 14.9749L15.8497 14.9944C15.8497 14.9944 15.5053 15.0543 15.0521 14.7814C14.8151 14.6388 14.5833 14.406 14.3626 14.1842C14.0251 13.8451 13.7131 13.5316 13.4469 13.6056C13.0002 13.7298 13.0143 14.5734 13.0143 14.5734C13.0143 14.5734 13.0175 14.7536 12.9157 14.8495C12.8051 14.954 12.5884 14.9749 12.5884 14.9749Z"/>
              </svg>
            </a>
          </li>
          <li className="sub-slide__social-item">
            <a className="sub-slide__social-link" href="/index.html">
              <svg className="sub-slide__social-icon"
                   width="28"
                   height="28"
                   viewBox="0 0 24 24"
                   fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14.0037 11.7913L11.1963 10.4813C10.9513 10.3675 10.75 10.495 10.75 10.7662V13.2338C10.75 13.505 10.9513 13.6325 11.1963 13.5188L14.0025 12.2087C14.2488 12.0938 14.2487 11.9063 14.0037 11.7913ZM12 0C5.3725 0 0 5.3725 0 12C0 18.6275 5.3725 24 12 24C18.6275 24 24 18.6275 24 12C24 5.3725 18.6275 0 12 0ZM12 16.875C5.8575 16.875 5.75 16.3213 5.75 12C5.75 7.67875 5.8575 7.125 12 7.125C18.1425 7.125 18.25 7.67875 18.25 12C18.25 16.3213 18.1425 16.875 12 16.875Z"/>
              </svg>
            </a>
          </li>
        </ul>
      </Swiper>
    </div>
  )
}

export default Slide
