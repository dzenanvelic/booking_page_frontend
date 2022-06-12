import React from 'react'
import { useFetch } from '../hooks/useFetch'
import './guestsloveit.css'
import Loading from './Loading'
function GusetsLoveIt() {
    const { data, loading, error, } = useFetch("/hotels?featured=true&limit=4")
    return (
        <div className="homes-guests-love-container">
            {loading ? <Loading /> : <>

                <h2 className="guests-love-title">Homes Guests Love</h2>

                <div className="guests-love-wrapper">
                    {data && data.map((item, i) => {
                        // console.log("item", item)

                        return <div key={i} className="guests-love-item">
                            <img className="guest-love-image" src={process.env.PUBLIC_URL + "/images/image6.jpg"} alt="img10" />
                            <div className="home-guests-love-container-inner">
                                <h3 className="home-guests-love-title">{item.name}</h3>
                                <h4 className="home-guests-love-desc">{item.city}</h4>
                                <h5 className="home-guests-love-price">Starting from ${item.cheapestPrice}</h5>
                                {item.rating && <span><button className="home-guests-love-rating">{item.rating}</button><small className='small-rate'>Exceptional</small></span>}
                            </div>
                        </div>
                    })}


                </div>
            </>}
        </div>
    )
}

export default GusetsLoveIt