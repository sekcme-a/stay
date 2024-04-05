import Layout from "@/components/layout/Layout";
import Link from "next/link"

export const metadata = {
  title: "방 타입",
  description: "영흥도 STAY 펜션의 방 타입을 소개합니다. STAY에는 A,B,C 3가지 방 타입이 있습니다.",
  openGraph: {
    title:"방 타입",
    description: "영흥도 STAY 펜션의 방 타입을 소개합니다. STAY에는 A,B,C 3가지 방 타입이 있습니다.",
    url:"/rooms"
  }
}
export default function Home() {

    const roomData = [
      {
        imageSrc: "/assets/images/custom/rooms/room_stay_a.png",
        startingPrice: "70,000₩",
        title: "STAY A",
        description: "STAY의 가장 기본적인 방으로, 베란다에 바베큐그릴이 비치되어 있습니다. 야외 바베큐장도 사용 가능합니다.",
        detailsLink: "/room-detail/a",
        animationDuration: ".8s",
      },
      {
        imageSrc: "/assets/images/custom/rooms/room_stay_b.jpeg",
        startingPrice: "100,000₩",
        title: "STAY B",
        description: "1층에 위치해 있어 보다 편리하며, 바베큐 이용에 좀 더 용의합니다. 방앞에 방 전용 실외 바베큐장이 있습니다.",
        detailsLink: "/room-detail/b",
        animationDuration: ".8s",
      },
      {
        imageSrc: "/assets/images/custom/rooms/room_stay_c.jpeg",
        startingPrice: "170,000₩",
        title: "STAY C",
        description: "1층에 위치해 있어 보다 편리하며, 바베큐 이용에 좀 더 용의합니다. 방이 2개 제공되며, 방앞에 8명 이상 수용가능한 전용 실외 바베큐장이 있습니다.",
        detailsLink: "/room-detail/C",
        animationDuration: ".8s",
      },
    ];
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Rooms" bgType="room">
              <div>
                <section className="section-padding">
                    <div className="auto-container">
                      <div className="row">
                        {roomData.map((room, index) => (
                          <div key={index} className={`col-lg-4 col-md-6`}>
                            <div className={`room-1-block wow fadeInUp`} data-wow-delay=".2s" data-wow-duration={room.animationDuration}>
                              <div className="room-1-image hvr-img-zoom-1">
                                <img src={room.imageSrc} alt="" style={{maxHeight:"230px"}}/>
                              </div>
                              <div className="room-1-content">
                                <p className="room-1-meta-info">최저 <span className="theme-color">{room.startingPrice}</span>/1박</p>
                                {/* <div className="room-1-rating">
                                  {Array.from({ length: room.rating }, (_, i) => (
                                    <i key={i} className="icon-6"></i>
                                  ))}
                                  <i className="icon-7"></i>
                                </div> */}
                                <h4 className="room-1-title mb_20"><Link href={room.detailsLink}>{room.title}</Link></h4>
                                <p className="room-1-text mb_30">{room.description}</p>
                                <div className="link-btn"><Link href={room.detailsLink} className="btn-1 btn-alt">자세히 보기 <span></span></Link></div>
                              </div>
                            </div>
                          </div> 
                        ))}
                        
                      </div>
                    </div>
                </section>
                </div>
            </Layout>
        </>
    )
}