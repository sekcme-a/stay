import Layout from "@/components/layout/Layout"
import Link from "next/link"


//img 320*240
const LIST = [
  {
    title:"봄꽃과 함께 섬마을 여행",
    subtitle:"4월 27일(토) 오후 3시 ~ 28일 (일) 오후 2시. 참가비 인당 100,000원",
    text:`경인매일 회장 김균식이 주최하는 행사로, 가수 콘서트, 상품 퀴즈, 숯불 바베큐 (주류 포함), 노래자랑, 한우곰탕(조식), 빙어잡이, 바지락 칼국수, 인우드 카페 등 다양한 콘텐츠가 준비되어있다.`,
    img:"/assets/images/custom/events/pension.png",
    button:{
      text: "자세히 보기",
      url:"https://firebasestorage.googleapis.com/v0/b/sportsassorenual.appspot.com/o/%E1%84%87%E1%85%A9%E1%86%B7%E1%84%81%E1%85%A9%E1%86%BE%E1%84%80%E1%85%AA%20%E1%84%92%E1%85%A1%E1%86%B7%E1%84%81%E1%85%A6%20%E1%84%89%E1%85%A5%E1%86%B7%E1%84%86%E1%85%A1%E1%84%8B%E1%85%B3%E1%86%AF%20%E1%84%8B%E1%85%A7%E1%84%92%E1%85%A2%E1%86%BC.pdf?alt=media&token=4d357b0c-a757-4d3f-944f-855f508b5463"
    }
  },
  {
    title:"동춘 서커스 50% 할인",
    subtitle:"평일 오후 2시 | 주말, 공휴일 오전 11시, 오후 2시, 오후 4시 30분",
    text:`대부도에 설치된 국내 유일의 전문 서커스 공연장으로, 약 1시간 이상 멋진 공연과 손에 땀을 쥐게 하는 아찔한 수준의 곡예를 볼 수 있는 동춘 서커스.
    동춘 서커스 50% 할인 티켓을 드립니다.`,
    img:"/assets/images/custom/events/circus.png",
    button:{
      text: "홈페이지로 이동",
      url:"http://www.circusdc.com/index.php"
    }
  },
  {
    title:"InWood Cafe 4500원 할인",
    subtitle:"오전 9시~오후7:30 인천 옹진군 영흥면 영흥로 398-6 (차 6분거리)",
    text:`핸드드립, 로스팅 전문카페로, 목조건물에서 즐기는 향긋한 커피. 직접 로스팅한 원두로 핸드드립 커피를 제공합니다.`,
    img:"/assets/images/custom/events/cafe.png",
    button:{
      text: "인스타로 이동",
      url:"https://www.instagram.com/in_wood_coffee"
    }
  },
]


export const metadata = {
  title: "이벤트",
  description: "펜션의 이벤트들을 소개합니다. 저희 STAY 펜션에는 여러가지 이벤트 및 할인 혜택이 있습니다.",
  openGraph: {
    title:"이벤트",
    description: "펜션의 이벤트들을 소개합니다. 저희 STAY 펜션에는 여러가지 이벤트 및 할인 혜택이 있습니다.",
    url:"/events"
  }
}



export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Our Events">
                <div>
                <section className="section-padding">
                    <div className="auto-container">
                        <div className="row">
                        {/* Repeat this block for each event */}
                        {
                          LIST.map((item, index) => (
                            <div className="col-lg-12" key={index}>
                              <div
                              className="event-1-block align-items-center d-flex wow fadeInLeft"
                              data-wow-delay=".2s"
                              data-wow-duration=".8s"
                              >
                                <div className="event-1-image">
                                    <Link href="/event-details">
                                    <img src={item.img} alt="" />
                                    </Link>
                                </div>
                                <div className="event-1-bottom-content">
                                    <h4 className="event-1-title mb_5">
                                    <Link href="/event-details">{item.title}</Link>
                                    </h4>
                                    <p className="event-1-meta-info mb_15">
                                      {item.subtitle}
                                    </p>
                                    <p style={{whiteSpace:"pre-line"}}>
                                      {item.text}
                                    </p>
                                    <div className="link-btn">
                                    <Link href={item.button.url} target="_blank" className="btn-1 btn-alt">
                                      {item.button.text}<span></span>
                                    </Link>
                                    </div>
                                </div>
                              </div>
                            </div>
                          ))
                        }
               
                      
                            
                        </div>
                    </div>
                </section>  
            </div>
        </Layout>
        </>
    )
}