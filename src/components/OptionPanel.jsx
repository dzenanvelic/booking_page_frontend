import React from 'react'
import './optionpanel.css'
function OptionPanel() {


    return (
        <div className='option-panel'>
            <h2 className="search-option-title">Search</h2>
            <label >Destination</label>
            <input type="text" className=" option-destination" />
            <label >Check-in-date</label>
            <input type="text" />
            <h3 className="options-title">Options</h3>
            <div className="options-box">
                <div className="options-item">
                    <label >Min price <small> per night</small></label>
                    <input type="number" />

                </div>
                <div className="options-item">
                    <label >Max price <small> per night</small></label>
                    <input type="number" />

                </div>
                <div className="options-item">

                    <label >Adult</label>
                    <input type="number" />
                </div>
                <div className="options-item">

                    <label >Children</label>
                    <input type="number" />
                </div>
                <div className="options-item">

                    <label >Room</label>
                    <input type="number" />
                </div>





            </div>
            <button className='option-search-button'>Search</button>
        </div>
    )
}

export default OptionPanel