import React from 'react'
import { Link } from 'react-router-dom'

import './searchlistsresults.css'
function SearchListsresults({ item }) {
    return (
        <div className="search-list-results">
            <div className="search-list-results-wrapper">
                <div className="image-search-list-container">
                    <img className='list-search-image' src={process.env.PUBLIC_URL + "/images/image8.jpg"} alt="imagelist" />

                </div>
                <div className="description-search-list-container">
                    <h3 className="description-search-list-title">{item.name}</h3>
                    <p className="description-search-list-range">{item.distance} from center</p>
                    <p className="description-search-list-taxi">Free airport taxi</p>
                    <p className="description-search-list-desc">Luxury with air conditioning</p>
                    <p className="description-search-list-kind">{item.desc.substring(0, 150)}...</p>
                    <p className="description-search-list-cancelation">Free cancelation</p>
                    <p className="description-search-list-getnow">You can cancel later, so lock this great price today!</p>


                </div>
                <div className="rate-price-search-list-container">
                    {item.rating && <div className="rate-list-container">
                        <span>Excellent</span>
                        <button>{item.rating}</button>
                    </div>}
                    <div className="price-list-container">
                        <span>${item.cheapestPrice}</span>
                        <small>Includes taxes and fees</small>
                        <Link to={`/hotel/${item._id}`}>
                            <button className='availability-button'>See availability</button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default SearchListsresults