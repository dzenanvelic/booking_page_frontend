import React from 'react'
import './searchlistsresults.css'
function SearchListsresults() {
    return (
        <div className="search-list-results">
            <div className="search-list-results-wrapper">
                <div className="image-search-list-container">
                    <img className='list-search-image' src={process.env.PUBLIC_URL + "/images/image8.jpg"} alt="imagelist" />

                </div>
                <div className="description-search-list-container">
                    <h3 className="description-search-list-title">Luxury Sweet Apartments</h3>
                    <p className="description-search-list-range">300 m from center</p>
                    <p className="description-search-list-taxi">Free airport taxi</p>
                    <p className="description-search-list-desc">Luxury with air conditioning</p>
                    <p className="description-search-list-kind">Large room · 1 bathroom · 24 square meters</p>
                    <p className="description-search-list-cancelation">Free cancelation</p>
                    <p className="description-search-list-getnow">You can cancel later, so lock this great price today!</p>


                </div>
                <div className="rate-price-search-list-container">
                    <div className="rate-list-container">
                        <span>Excellent</span>
                        <button>9.2</button>
                    </div>
                    <div className="price-list-container">
                        <span>$156</span>
                        <small>Includes taxes and fees</small>
                        <button>See availability</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SearchListsresults