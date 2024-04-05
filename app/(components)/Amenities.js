
import Image from "next/image"
import Link from "next/link"


const LIST = [
  {img:"/assets/images/custom/amenities/001.png"},
  {img:"/assets/images/custom/amenities/002.png"},
  {img:"/assets/images/custom/amenities/003.png"},
  {img:"/assets/images/custom/amenities/004.png"},
  {img:"/assets/images/custom/amenities/005.png"},
  {img:"/assets/images/custom/amenities/006.png"},
  {img:"/assets/images/custom/amenities/007.png"},
  {img:"/assets/images/custom/amenities/008.png"},
  {img:"/assets/images/custom/amenities/009.png"},
  // {img:"/assets/images/custom/amenities/00.png"},
]

export default function Amenities() {
    return (
        <>        
            
            <section className="section-padding gray-bg">
                <div className="auto-container">
                  <div className="team-1-wrapper">
                    <div className="section_heading text-center mb_50">
                      <span className="section_heading_title_small">STAY</span>
                      <h2 className="section_heading_title_big mb_20">펜션 시설</h2>
                      <p>펜션 STAY의 펜션 시설입니다.</p>
                    </div>
                    <div className="row">
                      {
                        LIST.map((item, index) => (
                          <div className="col_xl_five col-lg-3 col-md-6" key={index}>
                            <div className="icon_box-1">
                              <Image src={item.img} width={90} height={90}/>
                            </div>
                          </div>
                        ))
                      }
                     
                    </div>
                  </div>
                </div>
            </section>
        </>
    )
}
