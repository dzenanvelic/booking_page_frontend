import React from 'react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import './home.css'
function Home() {
    return (
        <div className='home'>
            <Nav />
            <Header />
            <div className="homeContainer">
                <div className="worldProperties">
                    <div className="world-prop-item">

                        <img className='world-prop-image' src={process.env.PUBLIC_URL + "/images/image1.webp"} alt="img1" />
                        <div className="world-prop-item-wrapper">
                            <h2 className="world-prop-title">Trodenheim</h2>
                            <h2 className="world-prop-desc"> 34 properties</h2>
                        </div>

                    </div>
                    <div className="world-prop-item">

                        <img className='world-prop-image' src={process.env.PUBLIC_URL + "/images/image2.webp"} alt="img1" />
                        <div className="world-prop-item-wrapper">
                            <h2 className="world-prop-title">Sixt</h2>
                            <h2 className="world-prop-desc"> 22 properties</h2>
                        </div>

                    </div>
                    <div className="world-prop-item">

                        <img className='world-prop-image' src={process.env.PUBLIC_URL + "/images/image3.webp"} alt="img1" />
                        <div className="world-prop-item-wrapper">
                            <h2 className="world-prop-title">Cala Anguila</h2>
                            <h2 className="world-prop-desc"> 9 properties</h2>
                        </div>

                    </div>

                </div>

                <div className="properties-container">
                    <h2 className="title-properties">Browse by property type</h2>
                    <div className="properties-type">
                        <div className="property-type-item">
                            <img className='property-type-image' src={process.env.PUBLIC_URL + "/images/image4.webp"} alt="" />
                            <div className="property-type-item-desc-cont">
                                <h4 className="property-type-title">Hotels</h4>
                                <p className="property-type-desc">245 hotels</p>
                            </div>
                        </div>
                        <div className="property-type-item">
                            <img className='property-type-image' src={process.env.PUBLIC_URL + "/images/image5.jpg"} alt="" />
                            <div className="property-type-item-desc-cont">
                                <h4 className="property-type-title">Apartments</h4>
                                <p className="property-type-desc">1330 apartments</p>
                            </div>
                        </div>
                        <div className="property-type-item">
                            <img className='property-type-image' src={process.env.PUBLIC_URL + "/images/image6.jpg"} alt="" />
                            <div className="property-type-item-desc-cont">
                                <h4 className="property-type-title">Resorts</h4>
                                <p className="property-type-desc">2311 resorts</p>
                            </div>
                        </div>
                        <div className="property-type-item">
                            <img className='property-type-image' src={process.env.PUBLIC_URL + "/images/image7.jpg"} alt="" />
                            <div className="property-type-item-desc-cont">
                                <h4 className="property-type-title">Villas</h4>
                                <p className="property-type-desc">1127villas</p>
                            </div>
                        </div>
                        <div className="property-type-item">
                            <img className='property-type-image' src={process.env.PUBLIC_URL + "/images/image8.jpg"} alt="" />
                            <div className="property-type-item-desc-cont">
                                <h4 className="property-type-title">Cabins</h4>
                                <p className="property-type-desc">1211 cabins</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homes-guests-love-container">
                    <h2 className="guests-love-title">Homes Guests Love</h2>
                    <div className="guests-love-wrapper">
                        <div className="guests-love-item">
                            <img className="guest-love-image" src={process.env.PUBLIC_URL + "/images/image10.jpg"} alt="img10" />
                            <div className="home-guests-love-container">
                                <h3 className="home-guests-love-title">Appartmento Bennicampi</h3>
                                <h4 className="home-guests-love-desc">Rome</h4>
                                <h5 className="home-guests-love-price">Starting from $120</h5>
                                <span><button className="home-guests-love-rating">8.6</button>Exceptional</span>
                            </div>
                        </div>
                        <div className="guests-love-item">
                            <img className="guest-love-image" src={process.env.PUBLIC_URL + "/images/image11.jpg"} alt="img10" />
                            <div className="home-guests-love-container">
                                <h3 className="home-guests-love-title">VIP Residence Budapest</h3>
                                <h4 className="home-guests-love-desc">Budapest</h4>
                                <h5 className="home-guests-love-price">Starting from $89</h5>
                                <span><button className="home-guests-love-rating">8.2</button>Exceptional</span>
                            </div>
                        </div>
                        <div className="guests-love-item">
                            <img className="guest-love-image" src={process.env.PUBLIC_URL + "/images/image12.jpg"} alt="img10" />
                            <div className="home-guests-love-container">
                                <h3 className="home-guests-love-title">Flora Chiado Apartments</h3>
                                <h4 className="home-guests-love-desc">Lisbon</h4>
                                <h5 className="home-guests-love-price">Starting from $220</h5>
                                <span><button className="home-guests-love-rating">9.6</button>Exceptional</span>
                            </div>
                        </div>
                        <div className="guests-love-item">
                            <img className="guest-love-image" src={process.env.PUBLIC_URL + "/images/image13.jpg"} alt="img10" />
                            <div className="home-guests-love-container">
                                <h3 className="home-guests-love-title">BNB Holder Amazing Sol</h3>
                                <h4 className="home-guests-love-desc">Madrid</h4>
                                <h5 className="home-guests-love-price">Starting from $117</h5>
                                <span><button className="home-guests-love-rating">8.2</button>Exceptional</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Home