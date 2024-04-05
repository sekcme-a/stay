
// import PortfolioFilter1 from ""
import dynamic from 'next/dynamic'
const PortfolioFilter1 = dynamic(() => import('@/components/elements/PortfolioFilter1'), {
    ssr: false,
})
import Layout from "@/components/layout/Layout"
import Link from "next/link"

export const metadata = {
    title: "갤러리",
    description: "영흥도 STAY 펜션의 사진들입니다. STAY 펜션의 풍경, 실내, 이벤트 사진들입니다.",
    openGraph: {
      title:"갤러리",
      description: "영흥도 STAY 펜션의 사진들입니다. STAY 펜션의 풍경, 실내, 이벤트 사진들입니다.",
      url:"/gallery"
    }
  }



export default function Home() {

    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Gallery">
                <section className="section-padding">
                    <div className="auto-container">
                        <div className="sortable-masonry">
                        <PortfolioFilter1 />
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}