import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/style.css"
// import "swiper/css/navigation"
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { cormorant, dmSans } from '@/lib/font'
export const metadata = {
    metadataBase: new URL('https://xn--sk4btxv9h88lv0c.com/'),
    title: {
        template: '%s | 영흥도파트원펜션',
        default: "영흥도파트원펜션 - PART1 숲속 펜션"
    },
    description: '영흥도에 위치한 PART1 펜션에는 바베큐, 수영장, 식사 등 PART1에서 행복한 추억을 만드실 수 있도록 노력하겠습니다.',
    icons: {
        icon: '/logo_small.jpg',
        shortcut: '/logo_small.jpg'
    },
    keywords: ["영흥도","영흥도펜션","펜션","대부도","대부도펜션","파트원","stay펜션","파트원펜션"],
    alternates: {
        canonical:"/",
    },
    openGraph: {
        title: {
            template: '%s | 영흥도파트원펜션',
            default: "영흥도파트원펜션 - PART1 숲속 펜션"
        },
        description: '영흥도에 위치한 PART1 펜션에는 바베큐, 수영장, 식사 등 PART1에서 행복한 추억을 만드실 수 있도록 노력하겠습니다.',
        url: '/',
        siteName:"영흥도파트원펜션",
        images: [
            {
                url:"https://xn--sk4btxv9h88lv0c.com/assets/images/pension_bg.png",
                width: 800,
                height: 600
            }
        ],
        type: 'website',
        locale: 'ko_KR',
        tags: ["영흥도","영흥도펜션","펜션","대부도","대부도펜션","파트원","stay펜션","파트원펜션"],
    }
}

export default function RootLayout({ children }) {
    return (
        <html lang="kr" className={`${dmSans.variable} ${cormorant.variable}`}>
            <body>{children}</body>
        </html>
    )
}
