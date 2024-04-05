import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle, bgType }) {
    return (
        <>
            
            
            <div className="page-title" style={
                bgType==="room" ? 
                { backgroundImage: "url(/assets/images/room_bg.png)" }
                :
                bgType==="menu" ? 
                { backgroundImage: "url(/assets/images/custom/menu/menu_bg.png"}
                :
                { backgroundImage: "url(/assets/images/custom/events/bg.png)" }
            }>
                <div className="auto-container">
                    <h1>{breadcrumbTitle}</h1>
                </div>
            </div>
            <div className="bredcrumb-wrap">
                <div className="auto-container">
                    <ul className="bredcrumb-list">
                        <li><Link href="/">Home</Link></li>
                        <li>{breadcrumbTitle}</li>
                    </ul>
                </div>
            </div>

        </>
    )
}
