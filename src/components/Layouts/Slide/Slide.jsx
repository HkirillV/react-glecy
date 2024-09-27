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
            <div className="slide__wrapper">
              <h2 className="slide__title">Нежный пломбир <br/> с клубничным джемом</h2>
              <p className="slide__description">Натуральное мороженое из свежих сливок
                и молока с вкуснейшим клубничным джемом – это идеальный десерт для всей семьи.</p>
              <Button className="slide__button">Заказать</Button>
            </div>
            <div className="slide__image-wrapper">
              <img className="slide__image" src="/src/assets/images/slide/мороженое_1.png" width="312" height="507"
                   loading="lazy" alt=""/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__inner">
            <div className="slide__wrapper">
              <h2 className="slide__title">Сливочное мороженое <br/> со вкусом банана</h2>
              <p className="slide__description">Сливочное мороженое с ярким банановым вкусом подарит вам свежесть и
                наслаждение даже в самый жаркий летний день.</p>
              <Button className="slide__button">Заказать</Button>
            </div>
            <div className="slide__image-wrapper">
              <img className="slide__image" src="/src/assets/images/slide/мороженое_2.png" width="312" height="507"
                   loading="lazy" alt=""/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide__inner">
            <div className="slide__wrapper">
              <h2 className="slide__title">Карамельный плобир <br/> с маршмеллоу</h2>
              <p className="slide__description">Необычный сладкий десерт с карамельным топпингом и кусочками зефира
                завоюет
                сердца сладкоежек всех возрастов.</p>
              <Button className="slide__button">Заказать</Button>
            </div>
            <div className="slide__image-wrapper">
              <img className="slide__image" src="/src/assets/images/slide/мороженое_3.png" width="312" height="507"
                   loading="lazy" alt=""/>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <Swiper
        className="sub-slide hidden-table"
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
            <img className="sub-slide__image" src="/src/assets/images/slide/subslide/мороженое_3.png" width="66"
                 height="150"
                 loading="lazy" alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sub-slide__item">
          <div className="sub-slide__wrapper">
            <img className="sub-slide__image" src="/src/assets/images/slide/subslide/мороженое_2.png" width="66"
                 height="150"
                 loading="lazy" alt=""/>
          </div>
        </SwiperSlide>
        <SwiperSlide className="sub-slide__item">
          <div className="sub-slide__wrapper">
            <img className="sub-slide__image" src="/src/assets/images/slide/subslide/мороженое_1.png" width="66"
                 height="150"
                 loading="lazy" alt=""/>
          </div>
        </SwiperSlide>
        <div className="sub-slide__social">
          <a className="sub-slide__social-link" href="/index.html">
            <svg className="sub-slide__social-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">

              <path fillRule="evenodd" clipRule="evenodd"
                    d="M26 14C26 20.627 20.627 26 14 26C7.373 26 2 20.627 2 14C2 7.373 7.373 2 14 2C20.627 2 26 7.373 26 14ZM14.43 10.859C13.263 11.344 10.93 12.349 7.432 13.873C6.864 14.099 6.566 14.32 6.539 14.536C6.493 14.902 6.951 15.046 7.573 15.241C7.658 15.268 7.746 15.295 7.836 15.325C8.449 15.524 9.273 15.757 9.701 15.766C10.09 15.774 10.524 15.614 11.003 15.286C14.271 13.079 15.958 11.964 16.064 11.94C16.139 11.923 16.243 11.901 16.313 11.964C16.383 12.026 16.376 12.144 16.369 12.176C16.323 12.369 14.529 14.038 13.599 14.902C13.309 15.171 13.104 15.362 13.062 15.406C12.968 15.503 12.872 15.596 12.78 15.685C12.21 16.233 11.784 16.645 12.804 17.317C13.294 17.64 13.686 17.907 14.077 18.173C14.504 18.464 14.93 18.754 15.482 19.116C15.622 19.208 15.756 19.303 15.887 19.396C16.384 19.751 16.831 20.069 17.383 20.019C17.703 19.989 18.035 19.688 18.203 18.789C18.6 16.663 19.382 12.059 19.563 10.161C19.574 10.0034 19.5673 9.84509 19.543 9.689C19.5284 9.56293 19.4671 9.44693 19.371 9.364C19.228 9.247 19.006 9.222 18.906 9.224C18.455 9.232 17.763 9.473 14.43 10.859V10.859Z"
                    fill="#FCFCFC"/>
            </svg>
          </a>
          <a className="sub-slide__social-link" href="/index.html">
            <svg className="sub-slide__social-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">

              <path fillRule="evenodd" clipRule="evenodd"
                    d="M26 14C26 20.6274 20.6274 26 14 26C7.37258 26 2 20.6274 2 14C2 7.37258 7.37258 2 14 2C20.6274 2 26 7.37258 26 14ZM14.5884 16.9749H13.8711C13.8711 16.9749 12.2885 17.0584 10.8948 15.7867C9.37486 14.3995 8.03249 11.647 8.03249 11.647C8.03249 11.647 7.95511 11.4665 8.03917 11.3793C8.13366 11.2812 8.39106 11.2749 8.39106 11.2749L10.1057 11.2651C10.1057 11.2651 10.2673 11.2888 10.3829 11.3632C10.4782 11.4246 10.5317 11.5394 10.5317 11.5394C10.5317 11.5394 10.8088 12.1536 11.1758 12.7093C11.8921 13.7942 12.2258 14.0315 12.469 13.9152C12.8233 13.7458 12.7171 12.3816 12.7171 12.3816C12.7171 12.3816 12.7236 11.8865 12.5387 11.666C12.3955 11.4951 12.1254 11.4453 12.0062 11.4313C11.9097 11.42 12.0681 11.2237 12.2733 11.1356C12.5819 11.0031 13.1268 10.9955 13.7706 11.0014C14.2722 11.0058 14.4165 11.0332 14.6127 11.0748C15.0677 11.1711 15.0536 11.4796 15.0229 12.1454C15.0138 12.3444 15.0032 12.5752 15.0032 12.8418C15.0032 12.9018 15.0012 12.9657 14.9991 13.0315C14.9885 13.3725 14.9763 13.7629 15.2324 13.908C15.3637 13.9822 15.6849 13.9191 16.4884 12.7233C16.8693 12.1566 17.1549 11.4902 17.1549 11.4902C17.1549 11.4902 17.2173 11.3715 17.3142 11.3205C17.4134 11.2685 17.5472 11.2845 17.5472 11.2845L19.3515 11.2746C19.3515 11.2746 19.8937 11.218 19.9815 11.4324C20.0735 11.6576 19.7788 12.1833 19.0417 13.0444C18.3463 13.8567 18.006 14.1587 18.0328 14.4236C18.0527 14.6198 18.2739 14.7957 18.7015 15.1436C19.5897 15.8661 19.8264 16.2455 19.8827 16.3357C19.8872 16.343 19.8906 16.3484 19.893 16.3519C20.2905 16.9296 19.4522 16.9749 19.4522 16.9749L17.8497 16.9944C17.8497 16.9944 17.5053 17.0543 17.0521 16.7814C16.8151 16.6388 16.5833 16.406 16.3626 16.1842C16.0251 15.8451 15.7131 15.5316 15.4469 15.6056C15.0002 15.7298 15.0143 16.5734 15.0143 16.5734C15.0143 16.5734 15.0175 16.7536 14.9157 16.8495C14.8051 16.954 14.5884 16.9749 14.5884 16.9749Z"
                    fill="#FCFCFC"/>
            </svg>
          </a>
          <a className="sub-slide__social-link" href="/index.html">
            <svg className="sub-slide__social-icon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">

              <path fillRule="evenodd" clipRule="evenodd"
                d="M16.0037 13.7913L13.1963 12.4813C12.9513 12.3675 12.75 12.495 12.75 12.7662V15.2338C12.75 15.505 12.9513 15.6325 13.1963 15.5188L16.0025 14.2087C16.2488 14.0938 16.2487 13.9063 16.0037 13.7913ZM14 2C7.3725 2 2 7.3725 2 14C2 20.6275 7.3725 26 14 26C20.6275 26 26 20.6275 26 14C26 7.3725 20.6275 2 14 2ZM14 18.875C7.8575 18.875 7.75 18.3213 7.75 14C7.75 9.67875 7.8575 9.125 14 9.125C20.1425 9.125 20.25 9.67875 20.25 14C20.25 18.3213 20.1425 18.875 14 18.875Z"
                fill="#FCFCFC"/>
            </svg>
          </a>
        </div>
      </Swiper>
    </div>
  )
}

export default Slide
