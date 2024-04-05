'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 2,
    spaceBetween: 30,
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

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
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
            slidesPerView: 1,
            spaceBetween: 30,
        },
    }
}


const LIST = [
    {
        img:"url(assets/images/custom/projects/003.png)",
        type: "근처 여행지",
        title: "영흥 에너지파크",
        content:`펜션에서 차로 단 2분거리인 영흥 에너지파크는 전기와 에너지에 대한 올바른 이해와 국내 전력산업에 대한 정보를 직접 체험할 수 있는 견학공간입니다. 전시관 1층, 2층, 야외체험 테마파크, 하모니 홀 등 다양한 체험거리들이 존재합니다.`
    },
    {
        img: "url(assets/images/custom/projects/001.png)",
        type: "근처 여행지",
        title:"선재도 옆 목섬",
        content:`CNN이 선정한 한국의 아름다운 섬 1위에 선정된 곳이기도 한 목섬은 모세의 기적처럼 바닷길이 열려 육로로 가볼 수 있는 섬입니다. 하루에 두번 바닷길이 열려 걸어갈 수 있으므로, 물때를 보고 가는 것을 추천드립니다. `
    },
    {
        img:"url(assets/images/custom/projects/002.png)",
        type: "근처 여행지",
        title: "십리포 해수욕장",
        content:`십리포 해수욕장은 영흥대교 부근 내리 선착장에서 십리 떨어져있다고 해서 지어진 이름의 해수욕장입니다. 갯벌체험, 포토존, 해수욕등이 가능하며, 파라솔&튜브등 임대가 가능합니다.`
    },

    {
        img:"url(assets/images/custom/projects/004.png)",
        type: "근처 여행지",
        title: "장경리 해수욕장",
        content:`인천에서 서남방으로 32Km 떨어진 영흥도 해수욕장 으로 백사장이 약1.5km가량 펼쳐져 있습니다. 특히 여름철 서해의 낙조는 가히 장관을 이루고 있어 피서철에 가족단위 여행의 최적지로 손꼽히고 있습니다.`
    }
]
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="swiper-container single-item-carousel">
                {LIST.map((item, index) => (
                    <SwiperSlide className="swiper-slide" key={index}>
                        <div className="project-1-image" style={{ backgroundImage: item.img }}>
                        <div className="project-1-block">
                            <span className="section_heading_title_small">{item.type}</span>
                            <h2 className="section_heading_title_big fs_27 mb_20">{item.title}</h2>
                            <p className="mb-0" style={{whiteSpace:"pre-line"}}>{item.content}</p>
                        </div>
                        </div>
                    </SwiperSlide> 
                ))}
                    
            </Swiper>
        </>
    )
}

