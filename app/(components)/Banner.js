'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 7000,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },



}

export default function Banner() {
    return (
        <>
<section className="banner-section p_relative">
    <Swiper {...swiperOptions} className="banner-carousel">                    
        <SwiperSlide className="slide-item p_relative">
        <div className="swiper-slide" style={{backgroundImage: 'url(assets/images/pension_bg.png)'}}>
      <div className="content-outer">
        <div className="content-box justify-content-center text-center">
          <div className="inner">
            <h4>파트원</h4>
            <h1>
              PART_1<br />
            </h1>
            <div className="text">섬마을 영흥도 숲속 펜션 파트원에서 추억을 만드세요.</div>
            <div className="link-box">
              <Link href="/rooms" className="btn-1">방 확인하기<span></span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
                    </SwiperSlide>
                    <SwiperSlide className="slide-item p_relative">
                    <div className="swiper-slide" style={{backgroundImage: 'url(assets/images/pension_bg3.jpeg)'}}>
      <div className="content-outer">
        <div className="content-box justify-content-center text-center">
          <div className="inner">
            <h4>다양한 컨텐츠</h4>
            <h1>PART_1</h1>
            <div className="text">파트원 X 동춘서커스 X INWOOD Cafe<br/>동춘 서커스 50% 할인 티켓 & 인우드 카페 할인 쿠폰</div>
            <div className="link-box">
              <Link href="/events" className="btn-1">혜택 확인하기<span></span></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
                        
                    </SwiperSlide>
                </Swiper>

            </section>
        </>
    )
}