import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './lists.css'
import SearchListsresults from './SearchListsresults'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
function Lists() {
    const location = useLocation()
    const [pickdate, setPickdate] = useState(false)
    const [date, setDate] = useState(location.state.date)
    const [destination, setDestination] = useState(location.state.destination)
    const [optionItems, setOptionItems] = useState(location.state.optionItems)
    // console.log("location", location)

    const handleDate = () => [
        setPickdate(!pickdate)
    ]
    return (
        <div className='lists'>
            <div className="lists-container">
                <div className="lists-option-panel">

                    <h2 className="search-option-title">Search</h2>
                    <label >Destination</label>
                    <input placeholder={destination} type="text" className=" option-destination" />
                    <label >Check-in-date</label>
                    <div className="date-option">
                        <span className="choosed-date" onClick={handleDate}>
                            {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                        </span>
                        {pickdate && <DateRange className='date-range'
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            minDate={new Date()}
                        />}
                    </div>


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
                            <input min={1} placeholder={optionItems.adult} type="number" />
                        </div>
                        <div className="options-item">

                            <label >Children</label>
                            <input min={0} placeholder={optionItems.children} type="number" />
                        </div>
                        <div className="options-item">

                            <label >Room</label>
                            <input min={1} placeholder={optionItems.room} type="number" />
                        </div>





                    </div>
                    <button className='option-search-button'>Search</button>
                </div>

                <div className="search-results-panel">
                    <SearchListsresults />
                    <SearchListsresults />
                    <SearchListsresults />
                    <SearchListsresults />
                    <SearchListsresults />
                    <SearchListsresults />
                    <SearchListsresults />
                    <SearchListsresults />
                    <SearchListsresults />
                    <SearchListsresults />
                    <SearchListsresults />
                    <SearchListsresults />
                    <SearchListsresults />
                    <SearchListsresults />
                    <SearchListsresults />
                    <SearchListsresults />
                    <SearchListsresults />
                </div>
            </div>
        </div>


    )
}

export default Lists