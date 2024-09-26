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
          <a href="/index.html"><img className="slide__social-icon" src="/src/assets/icons/slider/telegram.svg"
                                     alt="/"/></a>
          <a href="/index.html"><img className="slide__social-icon" src="/src/assets/icons/slider/vk.svg" alt="/"/></a>
          <a href="/index.html"><img className="slide__social-icon" src="/src/assets/icons/slider/youtube.svg"
                                     alt="/"/></a>
        </div>
      </Swiper>
    </div>
  )
}

export default Slide
