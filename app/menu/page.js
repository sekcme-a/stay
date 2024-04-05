import Layout from "@/components/layout/Layout"
import Link from "next/link"


const LIST_MENU = [
    {
        title:"모둠 꼬치",
        price:"18,000",
        text:"양, 닭다리살, 닭목살, 파닭, 새우, 시샤모(열빙어), 돼지껍데기, 염통, 베이컨팽이, 마늘 꼬치가 포함된 모둠 꼬치입니다."
    },
    {
        title:"소고기 편백찜",
        price:"20,000",
        text:"소고기, 새우, 만두, 알배추, 부추, 청경채, 숙주, 팽이버섯, 느타리버섯을 편백 찜기에 쪄서 제공됩니다."
    },
    {
        title:"가마솥 한우 설렁탕 (조식)",
        price:"8,000",
        text:"가마솥에 한우사골을 넣고 고아서 만든 설렁탕. 조식 메뉴로 9시~12시까지 제공되며, 각종 밑반찬과 함께 제공됩니다."
    }
]

const LIST_ALCOHOL = [
    {
        title:"발렌타인 30년산",
        price:"Shot 35,000",
        text:`발렌타인 30년은 프리미엄 스카치 위스키 중 단연 최고의 제품입니다.
        한정된 수량으로 인해 오로지 소수만 즐길 수 있는 최고의 명품 위스키를 STAY에서 만나보세요.`
    },
    {
        title:"조니워커 블랙라벨 12년산",
        price:"최저 3,900",
        text:`조니워커 블랙 라벨은 약간의 토탄 향이 있는 과일향과 달콤함입니다.
        입에서는 미묘한 연기의 최종 균형을 무시하지 않고 곡물과 오크의 기억을 동반하는 버터와 바닐라의 터치가 있습니다.
        샷 3,900 / 하이볼 5,900 / 쿼터바틀 21,000`
    }
]

export const metadata = {
    title: "메뉴",
    description: "영흥도 STAY 펜션의 메뉴들을 소개합니다. STAY에는 여러가지 메뉴들이 있습니다.",
    openGraph: {
      title:"메뉴",
      description: "영흥도 STAY 펜션의 메뉴들을 소개합니다. STAY에는 여러가지 메뉴들이 있습니다.",
      url:"/menu"
    }
  }


export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our Menu" bgType="menu">
                
                <section className="section-padding">
                    <div className="auto-container">
                        <div className="section_heading text-center">
                        <span className="section_heading_title_small">Room Services</span>
                        <h2 className="section_heading_title_big mb_60">Menu Of Stay</h2>
                        </div>
                        <div className="row">
                            {
                                LIST_MENU.map((item, index) => (
                                    <div className="col-lg-6" key={index}>
                                        <div className="price-menu-1-block">
                                        <div className="p_relative">
                                            <p className="theme-color fs_22 p_absolute r_0 t_0">{item.price}₩</p>
                                            <h4>{item.title}</h4>
                                            <div className="price-menu-1-divider mt_10 mb_10"></div>
                                            <p className="mb_0">{item.text}</p>
                                        </div>
                                        </div>
                                    </div>
                                ))
                            }

                  
                        </div>
                    </div>
                    </section>




                {/* <section className="section-padding">
                    <div className="auto-container">
                        <div className="section_heading text-center">
                        <span className="section_heading_title_small">Room Services</span>
                        <h2 className="section_heading_title_big mb_60">Alcohol Of Stay</h2>
                        </div>
                        <div className="row">
                            {
                                LIST_ALCOHOL.map((item, index) => (
                                    <div className="col-lg-6" key={index}>
                                        <div className="price-menu-1-block">
                                        <div className="p_relative">
                                            <p className="theme-color fs_22 p_absolute r_0 t_0">{item.price}₩</p>
                                            <h4>{item.title}</h4>
                                            <div className="price-menu-1-divider mt_10 mb_10"></div>
                                            <p className="mb_0" style={{whiteSpace:"pre-line"}}>{item.text}</p>
                                        </div>
                                        </div>
                                    </div>
                                ))
                            }

                  
                        </div>
                    </div>
                    </section> */}
                    {/* <section className="section-padding gray-bg">
                    <div className="feature-3-shape-1 p_absolute r_30 b_0"><img src="assets/images/shape/pattern-5.png" alt="" /></div>
                    <div className="auto-container">
                        <div className="section_heading text-center">
                        <span className="section_heading_title_small">Popular</span>
                        <h2 className="section_heading_title_big mb_60">Popular Dishes</h2>
                        </div>
                        <div className="row p_relative">
                        <div className="feature-3-shape-2"></div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-3-block mb_30 wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="feature-3-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-12.jpg" alt="" /></div>
                            <div className="feature-3-offer w_80 h_80 theme-bg p_absolute r_30 t_30 fs_18 text-center text-light pt_20 b_radius_50 lh_20"><span className="fs_22 fw_medium">15%</span><br /> OFF</div>
                            <div className="feature-3-lower-content">
                                <h4 className="feature-3-title mb_5">Grilled with Tomatoes</h4>
                                <p className="fs_15 mb_5"><span className="theme-color mr_10">$55.0</span> $65.0</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-3-block mb_30 wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="feature-3-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-13.jpg" alt="" /></div>
                            <div className="feature-3-offer w_80 h_80 theme-bg p_absolute r_30 t_30 fs_18 text-center text-light pt_20 b_radius_50 lh_20"><span className="fs_22 fw_medium">15%</span><br /> OFF</div>
                            <div className="feature-3-lower-content">
                                <h4 className="feature-3-title mb_5">Squeezing Fresh Juice</h4>
                                <p className="fs_15 mb_5"><span className="theme-color mr_10">$55.0</span> $65.0</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="feature-3-block mb_30 wow fadeInLeft" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="feature-3-image hvr-img-zoom-1"><img src="assets/images/resource/feature-image-14.jpg" alt="" /></div>
                            <div className="feature-3-offer w_80 h_80 theme-bg p_absolute r_30 t_30 fs_18 text-center text-light pt_20 b_radius_50 lh_20"><span className="fs_22 fw_medium">15%</span><br /> OFF</div>
                            <div className="feature-3-lower-content">
                                <h4 className="feature-3-title mb_5">Fish with Vegetable</h4>
                                <p className="fs_15 mb_5"><span className="theme-color mr_10">$55.0</span> $65.0</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </section> */}
            </Layout>
        </>
    )
}