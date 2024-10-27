import Link from "next/link"


export default function Features() {
    return (
        <>
           
           <section className="section-padding gray-bg">
                <div className="p_absolute l_0 b_0 r_0 t_0" style={{ background: "url(assets/images/shape/pattern-2.png) no-repeat left bottom" }}></div>
                <div className="auto-container">
                    <div className="section_heading text-center mb_60">
                    <span className="section_heading_title_small">PART1 X 동춘서커스 X INWOOD Cafe</span>
                    <h2 className="section_heading_title_big">PART1 펜션 예약 혜택</h2>
                    </div>
                    <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <Link href="http://www.circusdc.com/index.php" target="_blank">
                            <div className="feature-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="feature-2-image hvr-img-zoom-1"><img src="assets/images/custom/features_circus.png" alt="동춘 서커스" /></div>
                            <div className="feature-2-lower-content">
                                <div className="feature-2-offer w_80 h_80 theme-bg p_absolute r_40 t_0 fs_16 text-center text-light pt_20 b_radius_50 lh_20"><span className="fs_18 fw_medium">50%</span><br /> 할인</div>
                                <h4 className="feature-2-title mb_20">90년 전통의<br /> 동춘 아트 서커스</h4>
                                <p className="feature-2-text">대부도에 설치된 국내 유일의 전문 서커스 공연장으로, 약 1시간 이상 멋진 공연과 손에 땀을 쥐게 하는 아찔한 수준의 곡예로 많은 관광객들의 인기를 끌고 있다.</p>
                            </div>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="col-lg-4 col-md-6">
                        <Link href="https://www.instagram.com/in_wood_coffee" target="_blank">
                            <div className="feature-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="feature-2-image hvr-img-zoom-1"><img src="assets/images/custom/features_inwood.png" alt="인우드 카페" /></div>
                            <div className="feature-2-lower-content">
                                <div className="feature-2-offer w_80 h_80 theme-bg p_absolute r_40 t_0 fs_16 text-center text-light pt_20 b_radius_50 lh_20"><span className="fs_18 fw_medium">4500₩</span><br /> 할인</div>
                                <h4 className="feature-2-title mb_20">InWood Coffee <br /> <strong className="feature-2-custom fs_25">핸드드립 커피의 특별함</strong></h4>
                                <p className="feature-2-text">핸드드립, 로스팅 전문카페<br />영흥도 인우드 커피<br/>목조건물에서 즐기는 향긋한 커피<br/>직접 로스팅한 원두로 핸드드립 카페를 제공합니다.</p>
                            </div>
                            </div>
                        </Link>
                     </div>
                 
                    <div className="col-lg-4 col-md-6">

                        <div className="feature-2-block wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                        <div className="feature-2-image hvr-img-zoom-1"><img src="assets/images/custom/features_stay.png" alt="파트원 펜션 로고" /></div>
                        <div className="feature-2-lower-content">
                            {/* <div className="feature-2-offer w_80 h_80 theme-bg p_absolute r_40 t_0 fs_18 text-center text-light pt_20 b_radius_50 lh_20"><span className="fs_22 fw_medium">15%</span><br /> OFF</div> */}
                            <h4 className="feature-2-title mb_20">저녁 / 조식(점심)<br /> Menu</h4>
                            <p className="feature-2-text">삼겹살, 주류 무한리필, 모둠꼬치 (저녁)<br />{`조식(아침~점심)`}<br />가마솥으로 끓인 한우곰탕</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </section>

        </>
    )
}
