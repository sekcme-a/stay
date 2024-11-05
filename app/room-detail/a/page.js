
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import SwiperRoom from "../(components)/SwiperRoom"




const ROOM_IMAGE_LIST = [
  {img:"/assets/images/custom/rooms/a/001.png", alt:"방 사진 1"},
  {img:"/assets/images/custom/rooms/a/002.png", alt:"방 사진 2"},
  {img:"/assets/images/custom/rooms/a/003.png", alt:"방 사진 3"},
]

export const metadata = {
  title: "PART1 A타입",
  description: "PART1의 가장 기본적인 방으로, 베란다에 바베큐그릴이 비치되어 있습니다. 야외 바베큐장도 사용 가능합니다.",
  openGraph: {
    title:"PART1 A타입",
    description: "PART1의 가장 기본적인 방으로, 베란다에 바베큐그릴이 비치되어 있습니다. 야외 바베큐장도 사용 가능합니다.",
    url:"/room-detail/a"
  }
}


export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="PART1 A">
                <div>
                  <section className="section-padding">
                  <div className="auto-container">
                    <div className="row">
                      <div className="col-lg-8 pe-lg-35">
                        <div className="single-post">
                          <span className="section_heading_title_small">100,000~120,000₩</span>
                          <h2 className="mb_40">PART1 A</h2>
                          <p className="mb_20" style={{whiteSpace:"pre-line"}}>
                            {`2인/최대 4인 권장
                            PART1의 가장 기본적인 방으로, 베란다에 바베큐그릴이 비치되어 있습니다. 야외 바베큐장도 사용 가능합니다.`}
                          </p>
                          <SwiperRoom list={ROOM_IMAGE_LIST}/>
                          <h3 className="fs_40 mb_30">Events</h3>
                          <p className="mb_50" style={{whiteSpace:"pre-line"}}>
                            {`체크인 시 동춘서커스 50% 할인 티켓과 인우드커피 4500원 할인권이 1방 2매 제공됩니다.
                            동춘서커스 위치: 경기도 안산시 단원구 대부북동 1849-30 (대부도)
                            인우드커피 위치: 인천 옹진군 영흥면 영흥로 398-6 상가동 1층~2층 (차로 5분거리)
                            `}
                          </p>

                          <div className="row mb_30">
                  {/* <div className="col-md-4 col-sm-6 mb_45">
                    <div className="d-flex align-items-center">
                      <i className="icon-8 theme-color fs_40 w_55 mr_25"></i>
                      <p className="fw_medium mb_0">Fast wifi</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb_45">
                    <div className="d-flex align-items-center">
                      <i className="icon-9 theme-color fs_40 w_55 mr_25"></i>
                      <p className="fw_medium mb_0">Coffee</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb_45">
                    <div className="d-flex align-items-center">
                      <i className="icon-10 theme-color fs_40 w_55 mr_25"></i>
                      <p className="fw_medium mb_0">Bath</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb_45">
                    <div className="d-flex align-items-center">
                      <i className="icon-11 theme-color fs_40 w_55 mr_25"></i>
                      <p className="fw_medium mb_0">Parking Space​</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb_45">
                    <div className="d-flex align-items-center">
                      <i className="icon-12 theme-color fs_40 w_55 mr_25"></i>
                      <p className="fw_medium mb_0">Swimming Pool</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb_45">
                    <div className="d-flex align-items-center">
                      <i className="icon-14 theme-color fs_40 w_55 mr_25"></i>
                      <p className="fw_medium mb_0">Breakfast</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb_45">
                    <div className="d-flex align-items-center">
                      <i className="icon-15 theme-color fs_40 w_55 mr_25"></i>
                      <p className="fw_medium mb_0">Spa & Wellness</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb_45">
                    <div className="d-flex align-items-center">
                      <i className="icon-16 theme-color fs_40 w_55 mr_25"></i>
                      <p className="fw_medium mb_0">Meeting Room</p>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-6 mb_45">
                    <div className="d-flex align-items-center">
                      <i className="icon-17 theme-color fs_40 w_55 mr_25"></i>
                      <p className="fw_medium mb_0">Drink</p>
                    </div>
                  </div> */}
                </div>

                          <h3 className="fs_40 mb_30">Hotel Rules</h3>
                          <p className="mb_30">
                            펜션 PART1 이용에 대해 알려드립니다.
                          </p>
                          <ul className="list-2 mb_70">
                            <li>
                              <i className="icon-23"></i>{`체크인: 3:00 PM - 9:00 PM (9시 이후 체크인 시 연락부탁드립니다.)`}
                            </li>
                            <li>
                              <i className="icon-23"></i>체크아웃: 11:00 AM
                            </li>
                            <li>
                              <i className="icon-23"></i>실외 바베큐 오후 11시 마감
                            </li>
                            <li>
                              <i className="icon-23"></i>{`추가 인원 1인당 추가금 2만원 (현장결제)`}
                            </li>
                            <li>
                              <i className="icon-23"></i>실내 흡연금지
                            </li>
                          </ul>
                          <h3 className="fs_40 mb_30">Cancellation</h3>
                          <p className="mb_70" style={{whiteSpace:"pre-line"}}>
                            {`체크인 날짜 기준
                            5일 전 취소 시 100% 환불
                            3일 전 취소 시 50% 환불
                            1일 전 취소 시 30% 환불
                            당일 취소 환불 불가`}
                          </p>


                          <h3 className="fs_40 mb_30">Barbeque</h3>
                          <p className="mb_50" style={{whiteSpace:"pre-line"}}>
                            {`바베큐 사용시 2만원 현장결제
                            숯+그릴+토치가 제공됩니다.
                            `}
                          </p>


                          <h3 className="fs_40 mb_30">Menu</h3>
                          <p className="mb_50" style={{whiteSpace:"pre-line"}}>
                            {`모둠 꼬치 18,000₩
                            (양, 닭다리살, 닭목살, 파닭, 새우, 시샤모, 돼지껍데기, 염통, 베이컨팽이, 마늘)
        
                            소고기 편백찜 20,000₩
                            (소고기, 새우, 만두, 알배추, 부추, 청경채, 숙주, 팽이버섯, 느타리버섯)
                            `}
                          </p>


                          <h3 className="fs_40 mb_30">Location</h3>
                          <p className="mb_30">
                            인천광역시 옹진군 영흥면 영흥남로 321길 41
                          </p>


                        </div>
                      </div>
                      <div className="col-lg-4">




                  <div className="widget mb_40 gray-bg p_40">
                    <h4 className="mb_20">예약 가격</h4>
                    <div className="booking-form-3">
                      <form className="hotel-booking-form-1-form d-block">
                        <div className="form-group">
                          <p className="hotel-booking-form-1-label">{`성수기(6월~9월), 공휴일 하루 전날도 주말에 포함됩니다.`}</p>
                        </div>
                        <div className="form-group">
                          <p className="hotel-booking-form-1-label">{`비성수기 평일: `}</p>
                          <input
                            placeholder="100,000₩"
                            className=""
                            type="text"
                            name="form-name"
                            id="nd_booking_archive_form_date_range_from"
                            
                          />
                        </div>
                        <div className="form-group">
                          <p className="hotel-booking-form-1-label">{`비성수기 주말: `}</p>
                          <input
                            placeholder="120,000₩"
                            className=""
                            type="text"
                            name="form-name"
                            id="nd_booking_archive_form_date_range_from"
                            
                          />
                        </div>
                        <div className="form-group">
                          <p className="hotel-booking-form-1-label">{`성수기 평일: `}</p>
                          <input
                            placeholder="100,000₩"
                            className=""
                            type="text"
                            name="form-name"
                            id="nd_booking_archive_form_date_range_from"
                            
                          />
                        </div>
                        <div className="form-group">
                          <p className="hotel-booking-form-1-label">{`성수기 주말: `}</p>
                          <input
                            placeholder="120,000₩"
                            className=""
                            type="text"
                            name="form-name"
                            id="nd_booking_archive_form_date_range_from"
                            
                          />
                        </div>
                        {/* </div>
                        <div className="form-group">
                          <p className="hotel-booking-form-1-label">Check - Out:</p>
                          <input
                            placeholder="21 Sep, 2022"
                            className=""
                            type="text"
                            name="form-name"
                            id="nd_booking_archive_form_date_range_to"
                          
                          />
                        </div>
                        <div className="form-group">
                          <p className="hotel-booking-form-1-label">Rooms:</p>
                          <select>
                            <option data-display="1 Room">1 Room</option>
                            <option value={2}>2 Rooms</option>
                            <option value={3}>3 Rooms</option>
                            <option value={4}>4 Rooms</option>
                            <option value={5}>5 Rooms</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <p className="hotel-booking-form-1-label">Adults:</p>
                          <select>
                            <option data-display="2 Adults">2 Adults</option>
                            <option value={1}>1 Adult</option>
                            <option value={3}>3 Adults</option>
                            <option value={4}>4 Adults</option>
                            <option value={5}>5 Adults</option>
                          </select>
                        </div>
                        <div className="form-group mb_50">
                          <p className="hotel-booking-form-1-label">Child:</p>
                          <select>
                            <option data-display="1 Children">1 Children</option>
                            <option value={0}>0 Children</option>
                            <option value={2}>2 Childrens</option>
                            <option value={3}>3 Childrens</option>
                            <option value={4}>4 Childrens</option>
                            <option value={5}>5 Childrens</option>
                          </select>
                        </div>
                        <div className="form-group mt-5">
                          <h4 className="mb_20">Extra Services</h4>
                          <div className="d-flex align-items-center justify-content-between">
                            <p>
                              <input type="checkbox" name="vehicle1" value="Bike" /> Cleaning Fee
                            </p>
                            <p>$9.0</p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <p>
                              <input type="checkbox" name="vehicle1" value="Bike" /> Free
                            </p>
                            <p>$9.0</p>
                          </div>
                          <div className="d-flex align-items-center justify-content-between">
                            <p>
                              <input type="checkbox" name="vehicle1" value="Bike" /> Parking
                            </p>
                            <p>$7.0</p>
                          </div>
                        </div>
                        <div className="form-group mt-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <h4 className="mb_20">Your Price</h4>
                            <p>$9.0</p>
                          </div>
                        </div>
                        <div className="form-group mb-0">
                          <button type="submit" className="btn-1">
                            Book Now<span></span>
                          </button>
                        </div> */}
                      </form>
                    </div>
                  </div>
                </div>
                    </div>
                  </div>
                  </section>
                  {/* <section className="section-padding pt-0">
                    <div className="auto-container">
                      <div className="section_heading mb_55">
                        <h2 className="section_heading_title_big">Related Rooms</h2>
                      </div>
                      <div className="row">
                        <div className="col-lg-4 col-md-6">
                          <div className="room-1-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration=".8s">
                            <div className="room-1-image hvr-img-zoom-1">
                              <img src="assets/images/resource/room-1.jpg" alt="" />
                            </div>
                            <div className="room-1-content">
                              <p className="room-1-meta-info">
                                Start from <span className="theme-color">$55.0</span>/night
                              </p>
                              <div className="room-1-rating">
                                <i className="icon-6"></i>
                                <i className="icon-6"></i>
                                <i className="icon-6"></i>
                                <i className="icon-6"></i>
                                <i className="icon-7"></i>
                              </div>
                              <h4 className="room-1-title mb_20">
                                <Link href="/room-details">Luxury Room</Link>
                              </h4>
                              <p className="room-1-text mb_30">Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.</p>
                              <div className="link-btn">
                                <Link href="/room-details" className="btn-1 btn-alt">
                                  Book Now <span></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="room-1-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.2s">
                            <div className="room-1-image hvr-img-zoom-1">
                              <img src="assets/images/resource/room-2.jpg" alt="" />
                            </div>
                            <div className="room-1-content">
                              <p className="room-1-meta-info">
                                Start from <span className="theme-color">$55.0</span>/night
                              </p>
                              <div className="room-1-rating">
                                <i className="icon-6"></i>
                                <i className="icon-6"></i>
                                <i className="icon-6"></i>
                                <i className="icon-6"></i>
                                <i className="icon-7"></i>
                              </div>
                              <h4 className="room-1-title mb_20">
                                <Link href="/room-details">Delux Room</Link>
                              </h4>
                              <p className="room-1-text mb_30">Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.</p>
                              <div className="link-btn">
                                <Link href="/room-details" className="btn-1 btn-alt">
                                  Book Now <span></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                          <div className="room-1-block wow fadeInUp" data-wow-delay=".2s" data-wow-duration="1.5s">
                            <div className="room-1-image hvr-img-zoom-1">
                              <img src="assets/images/resource/room-3.jpg" alt="" />
                            </div>
                            <div className="room-1-content">
                              <p className="room-1-meta-info">
                                Start from <span className="theme-color">$55.0</span>/night
                              </p>
                              <div className="room-1-rating">
                                <i className="icon-6"></i>
                                <i className="icon-6"></i>
                                <i className="icon-6"></i>
                                <i className="icon-6"></i>
                                <i className="icon-7"></i>
                              </div>
                              <h4 className="room-1-title mb_20">
                                <Link href="/room-details">Luxury Room</Link>
                              </h4>
                              <p className="room-1-text mb_30">Mattis cras magna morb punar aenean aliquet in. Risus a arcu eget.</p>
                              <div className="link-btn">
                                <Link href="/room-details" className="btn-1 btn-alt">
                                  Book Now <span></span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section> */}
                </div>
            </Layout>
        </>
    )
}