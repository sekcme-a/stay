import Link from "next/link"
export default function About() {
    return (
        <>
            <section className="section-padding">
                <div className="auto-container">
                    <div className="row align-items-center">
                    <div className="col-lg-6 pe-lg-5">
                        <div className="row">
                        <div className="col-md-6">
                            <div className="mb-30 t__15 p_relative"            >
                            <img src="assets/images/custom/about1.png" alt="숲속 이미지" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="mb-30 t_15 p_relative" data-parallax='{"y": -30}'>
                            <img src="assets/images/custom/about2.png" alt="" />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                        <div className="section_heading mb_20">
                        <span className="section_heading_title_small">About STAY.</span>
                        <h2 className="section_heading_title_middle" style={{lineHeight:1.2, fontSize:"30px"}}>영흥도<br /> 숲속 펜션 STAY</h2>
                        </div>
                        <p className="aboout-1-desc mb_30">인천광역시 옹진군 영흥면 영흥남로 321길 41,</p>
                        <ul className="list-1 mb_30">
                        <li><i className="icon-20"></i>Powerful Admin Panel</li>
                        <li><i className="icon-20"></i>Multi-Language Support</li>
                        </ul>
                        <div className="about-1-btn mb_30">
                        <Link href="/rooms" className="btn-1">+ 방 보기<span></span></Link>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}
