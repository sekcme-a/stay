
'use client'
import Isotope from "isotope-layout"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"


//type: sight || inside || event
const LIST = [
    {
        type:"sight",
        img:"/assets/images/custom/gallery/sight/stay.png",
        alt:"펜션 배경"
    },
    {
        type:"inside",
        img:"/assets/images/custom/gallery/inside/room_stay_a.png",
        alt:"방 A",
    },
    {
        type:"inside",
        img:"/assets/images/custom/gallery/inside/room_stay_b.jpeg",
        alt:"방 B",
    },
    {
        type:"sight",
        img:"/assets/images/custom/gallery/sight/bbq.png",
        alt:"옥상 바베큐"
    },
    {
        type:"sight",
        img:"/assets/images/custom/gallery/sight/bbq2.png",
        alt:"옥상 바베큐 2"
    },
    {
        type:"sight",
        img:"/assets/images/custom/gallery/sight/sight_left.jpeg",
        alt:"펜션 측면 배경"
    },
    {
        type:"inside",
        img:"/assets/images/custom/gallery/inside/bed.jpeg",
        alt:"침대",
    },
    {
        type:"inside",
        img:"/assets/images/custom/gallery/inside/room_dark.jpeg",
        alt:"방_불끔",
    },

    {
        type:"inside",
        img:"/assets/images/custom/gallery/inside/room_stay_c.jpeg",
        alt:"방 C",
    },
    {
        type:"inside",
        img:"/assets/images/custom/gallery/inside/room_table.jpeg",
        alt:"방 실내 책상",
    },
    {
        type:"inside",
        img:"/assets/images/custom/gallery/inside/room_wine.jpeg",
        alt:"와인",
    },
    {
        type:"inside",
        img:"/assets/images/custom/gallery/inside/room_wine2.jpeg",
        alt:"와인2",
    },
]
export default function PortfolioFilter1() {
    // Isotope
    const isotope = useRef()
    const [filterKey, setFilterKey] = useState("*")
    useEffect(() => {
        setTimeout(() => {
            isotope.current = new Isotope(".items-container", {
                itemSelector: ".masonry-item",
                // layoutMode: "fitRows",
                percentPosition: true,
                masonry: {
                    columnWidth: ".masonry-item",
                },
                animationOptions: {
                    duration: 750,
                    easing: "linear",
                    queue: false,
                },
            })
        }, 1000)
    }, [])
    useEffect(() => {
        if (isotope.current) {
            filterKey === "*"
                ? isotope.current.arrange({ filter: `*` })
                : isotope.current.arrange({ filter: `.${filterKey}` })
        }
    }, [filterKey])
    const handleFilterKeyChange = useCallback((key) => () => {
        setFilterKey(key)
    },
        []
    )

    const activeBtn = (value) => (value === filterKey ? "filter active" : "filter")




    return (
        <>

            <div className="filters centred mb_50">
              

<div className=" filter-tabs filter-btns clearfix">
      <ul className="filter-tabs filter-btns d-flex justify-content-center">
        <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>
          전체
        </li>
        <li className={activeBtn("sight")} onClick={handleFilterKeyChange("sight")}>
          풍경
        </li>
        <li className={activeBtn("inside")} onClick={handleFilterKeyChange("inside")}>
          실내
        </li>
        <li className={activeBtn("event")} onClick={handleFilterKeyChange("event")}>
          이벤트
        </li>
      </ul>
    </div>
            </div>
            <div className="items-container row clearfix">
            <div className="items-container row">
                            
            {
                LIST.map((item, index) => (
                    <div className={`col-lg-4 col-md-6 col-sm-12 masonry-item all ${item.type} col-lg-4 col-md-6 col-sm-12`} key={index}>
                    <div className="gallery-block-1-inner-box">
                        <div className="gallery-block-1-image">
                        <img src={item.img} alt={item.alt}/>
                        </div>
                        <div className="gallery-block-1-overlay">
                        <div className="gallery-block-1-lower-content">
                            <div className="gallery-block-1-link-btn">
                            <Link href={item.img}className="lightbox-image" data-fancybox="gallery" target="_blank"><span className="icon-24"></span></Link>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                ))
            }

                   
                        </div>
            </div>
        </>
    )
}
