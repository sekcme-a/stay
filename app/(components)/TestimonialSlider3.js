'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    // spaceBetween: 30,
    autoplay: {
        delay: 2500,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider3() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="slide-item">
                <div className="room-2-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s" style={{ backgroundImage: "url(assets/images/custom/rooms/room_stay_a.png)" }}>
                                <div className="room-2-content">
                                <h4 className="room-2-title mb_4"><Link href="/room-details">PART1 A</Link></h4>
                                <p className="room-2-meta-info">최저 <span className="theme-color">70,000₩</span>/1박 부터</p>
                                </div>
                                <div className="room-2-content2">
                                {/* <div className="room-2-rating">
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-7"></i>
                                </div> */}
                                <h4 className="room-2-title mb_4"><Link href="/room-detail/a">PART1 A</Link></h4>
                                <p className="room-2-meta-info">최저 <span className="theme-color">70,000₩</span>/1박 부터</p>
                                <p className="room-2-text mb_30">PART1의 가장 기본적인 방으로,<br />베란다에 바베큐그릴이 비치되어 있습니다.<br/>야외 바베큐장도 사용 가능합니다.<br />{`2인/최대6인(권장 최대인원수 4인)`}</p>
                                <div className="link-btn"><Link href="/room-detail/a" className="btn-1 btn-alt">자세히 보기 <span></span></Link></div>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="room-2-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s" style={{ backgroundImage: "url(assets/images/custom/rooms/room_stay_b.jpeg)" }}>
                                <div className="room-2-content">
                                <h4 className="room-2-title mb_4"><Link href="/room-details">PART1 B</Link></h4>
                                <p className="room-2-meta-info">최저 <span className="theme-color">100,000₩</span>/1박 부터</p>
                                </div>
                                <div className="room-2-content2">
                                {/* <div className="room-2-rating">
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-7"></i>
                                </div> */}
                                <h4 className="room-2-title mb_4"><Link href="/room-detail/b">PART1 B</Link></h4>
                                <p className="room-2-meta-info">최저 <span className="theme-color">100,000₩</span>/1박 부터</p>
                                <p className="room-2-text mb_30">1층에 위치해 있어 보다 편리하며, 바베큐 이용에 좀 더 용의합니다. <br />방앞에 방 전용 실외 바베큐장이 있습니다.<br />{`2인/최대6인(권장 최대인원수 4인)`}</p>
                                <div className="link-btn"><Link href="/room-detail/b" className="btn-1 btn-alt">자세히 보기 <span></span></Link></div>
                                </div>
                            </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="room-2-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s" style={{ backgroundImage: "url(assets/images/custom/rooms/room_stay_c.jpeg)" }}>
                                <div className="room-2-content">
                                <h4 className="room-2-title mb_4"><Link href="/room-detail/c">PART1 C</Link></h4>
                                <p className="room-2-meta-info">최저 <span className="theme-color">170,000₩</span>/1박 부터</p>
                                </div>
                                <div className="room-2-content2">
                                {/* <div className="room-2-rating">
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-6"></i>
                                    <i className="icon-7"></i>
                                </div> */}
                                <h4 className="room-2-title mb_4"><Link href="/room-details">PART1 C</Link></h4>
                                <p className="room-2-meta-info">최저 <span className="theme-color">170,000₩</span>/1박 부터</p>
                                <p className="room-2-text mb_30">1층에 위치해 있어 보다 편리하며, 바베큐 이용에 좀 더 용의합니다. <br />방이 2개 제공되며, 방앞에 8명 이상 수용가능한 전용 실외 바베큐장이 있습니다.<br />{`4인/최대12인(권장 최대인원수 8인)`}</p>
                                <div className="link-btn"><Link href="/room-detail/c" className="btn-1 btn-alt">자세히 보기 <span></span></Link></div>
                                </div>
                            </div>
                </SwiperSlide>
                
            </Swiper>

            <div className="owl-nav">
                <button type="button" className="owl-prev h1p">
                    <span>‹</span>
                </button>
                <button type="button" className="owl-next h1n">
                    <span>›</span>
                </button>
            </div>
        </>
    )
}
