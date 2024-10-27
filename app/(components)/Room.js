import Link from "next/link"
import TestimonialSlider3 from './TestimonialSlider3'


export default function Room() {
    return (
        <>            
            <section className="section-padding">
                <div className="d-flex flex-wrap">
                    <div className="room-2-left-column">
                    <div className="room-2-container">
                        <div className="section_heading mb_25">
                        <span className="section_heading_title_small">PART1</span>
                        <h2 className="section_heading_title_big">Our Rooms <br /> & Suites</h2>
                        </div>
                        <p className="mb_30">펜션 PART1는 화이트동, 블루동으로 구성되어있습니다.<br />펜션에서 좋은 추억 보낼 수 있도록 노력하겠습니다.<br />
                        저희는 다양한 고객층의 편의성을 위해 인원수 제한을 크게 두고있지 않지만,<br /> 쾌적한 방 이용을 위해서는 권장 인원수을 초과하지 않는 것을 추천드립니다.</p>
                        
                    </div>
                    </div>
                    <div className="room-2-right-column">
                    <div className="room-2-container2">
                        <div className="swiper-container two-item-carousel">
                        <div className="swiper-wrapper">
                            {/* Repeat the following block for each room */}
                            <div className="swiper-slide">
                            <div className="content-box">
                        {/*Theme Carousel*/}
                        <TestimonialSlider3 />                        
                    </div>
                            </div>
                            {/* End of room block */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section> 

        </>
    )
}
