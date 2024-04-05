import Image from "next/image"
import Link from "next/link"

export default function Footer1() {
    return (
        <>
    <footer className="main-footer">
      <div className="footer-1-middle">
        <div className="auto-container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="contact-widget-1 mb_30">
                <div className="footer-widget-title"><h4>STAY</h4></div>
                <ul className="contact-widget-1-list">
                  <li><span>주소:</span>인천광역시 옹진군 영흥면 영흥남로 321길 41</li>
                  {/* <li><span>Email:</span><Link href="mailto:example@royalking.com">example@royalking.com</Link></li> */}
                  <li><span>예약문의:</span><Link href="tel:3336660000">010-4891-3765</Link></li>
                </ul>
                <ul className="footer-social-icon d-flex align-items-center">
                  <li><Link href="https://www.instagram.com/stay_at_stay/" target="_blank"><Image src="/assets/images/custom/logo_insta.png" width={25} height={25}/></Link></li>
                  {/* <li><Link href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></Link></li>
                  <li><Link href="https://twitter.com/?lang=en"><i className="fab fa-twitter"></i></Link></li> */}
                 
                </ul>
              </div>
            </div>
            <div className="col-lg-2 col-md-6">
              <div className="link-widget-1 mb_30">
                <div className="footer-widget-title"><h4>Links</h4></div>
                <ul className="link-widget-1-list">
                  <li><Link href="/rooms">방 보기</Link></li>
                  <li><Link href="/menu">메뉴</Link></li>
                  <li><Link href="/events">이벤트</Link></li>
                  <li><Link href="/gallery">갤러리</Link></li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="link-widget-1 mb_30">
                <div className="footer-widget-title"><h4>예약문의</h4></div>
                <p className="mb_25">전화문의 : 010-4891-3765</p>
                <p>전화문의 연중무휴: 오전 9시 ~ 오후 6시</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="about-widget-1 mb_30">
                <div className="footer-widget-title"><h4>Contents</h4></div>
                <div className="about-widget-1-text">
                  <p className="mb_30">베란다/실외/옥상 바베큐, 수영장, 노래자랑, 저녁/조식 메뉴, 근처 해수욕장, 에너지 파크, 갯벌 체험 등</p>
                  {/* <div className="footer-newsletter">
                    <form>
                      <input type="email" placeholder="Email address" />
                      <button className="btn-1">Subscribe <span></span></button>
                    </form>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>

        </>
    )
}
