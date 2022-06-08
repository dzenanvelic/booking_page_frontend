import './hotel.css'
import React from 'react'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Mail from '../pages/Mail'
import { hotelPics } from '../data'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
function Hotel() {

    return (<>
        <Nav />
        <Header type="list" />
        <div className='hotel-single'>
            <div className="hotel-wrapper">
                <button className="reserve-or-book">Reserve or book now!</button>
                <h2 className="hotel-title">Sarajevo Waves Aparthotel</h2>
                <div className="hotel-location">
                    <FontAwesomeIcon icon={faLocationDot} />
                    <span className="location-name">Barska 59, 71210 Sarajevo, Bosna i Hercegovina </span>
                </div>
                <p className="location-description">Great location - show map</p>
                <p className="book-hotel">
                    Book a stay over $135 at this property and gea a free airport tax
                </p>


                <div className="hotel-pics-wrapper">
                    {hotelPics.map((pic) => {
                        return <div key={pic.id} className="image-wrapper">

                            <img src={pic.url} alt={pic.url} />
                        </div>


                    })
                    }
                </div>

                <div className="hotel-location-desc-price">
                    <div className="close-desc-hotel">
                        <h2 className="hotel-location-title">Stay in the heart of Sarajevo</h2>
                        <p className="hotel-desc-detail">
                            Apartmani Waves nalaze se na 5 km od Ratnog tunela i 12 km od ulice Baščaršije u Sarajevu te sadrže prostor za sjedenje i kuhinju. U objektu je moguće koristiti besplatni WiFi.

                            Smještaj ima perilicu rublja, TV ravnog ekrana, kauč i radni stol. Sve jedinice sadrže terasu i/ili balkon.

                            Objekt ima dječje igralište.

                            Gosti se mogu opustiti u vrtu.

                            Fontana Sebilj udaljena je 12 km od apartmana Waves, a Latinski most 13 km. Međunarodna zračna luka Sarajevo nalazi se na 4,4 km od objekta.
                        </p>
                    </div>
                    <div className="price-staying-desc-hotel">
                        <h2 className="price-staying-title">Perfect for a 3-night stay!</h2>
                        <p className="staying-desc">
                            Parovima se posebno svidjela lokacija - ocijenili su je s 8,9 za svoj boravak udvoje.
                        </p>
                        <span className="staying-price">$233 <span nights-span>(3 night/s)</span></span>
                        <button className="staying-button">Reserve or book now!</button>
                    </div>
                </div>

            </div>

        </div>
        <Mail />
        <Footer />
    </>)
}

export default Hotel