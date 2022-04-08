import React from "react"
import '../App.css'

import banner from '../assets/img/banner.png'
import banner2 from '../assets/img/banner2.png'
import banner3 from '../assets/img/banner3.png'

function Home() {
    return (
        <>
        <div>
            <img className="banner" src={banner} alt={banner} />
            <img className="banner" src={banner2} alt={banner2} />
            <img className="banner" src={banner3} alt={banner3} />
        </div>
        </>
    )
}

export default Home
