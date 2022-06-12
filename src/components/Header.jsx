import React, { useState } from 'react'
import './header.css'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns'
import { faBed, faCalendar, faCar, faJetFighter, faMagnifyingGlass, faPerson, faShapes, faTaxi, } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
function Header({ type }) {
    const navigate = useNavigate()
    const [pickdate, setPickdate] = useState(false)
    const [option, setOption] = useState(false)
    const [destination, setDestination] = useState("")
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection',

        }
    ])
    const [optionItems, setOptionsItems] = useState({
        adult: 1,
        children: 0,
        room: 1
    })
    //clos date pick menu
    const handlePickDate = () => {
        setPickdate(!pickdate)
    }
    //handle number of adults, childrens or rooms
    const handleOption = (name, operation) => {
        setOptionsItems((prev) => {
            return {
                ...prev,
                [name]: operation === 'i' ? optionItems[name] + 1 : optionItems[name] - 1
            }
        })
    }
    //hide and open adults, childrens... menu
    const hideOptions = () => {
        setOption(!option)
    }
    const handleNavigate = () => {
        navigate('/hotels', { state: { destination, optionItems, date } })
    }
    return (
        <div className='header'>
            <div className="header-container">
                <div className="features">
                    <div className="feature active">
                        <span><FontAwesomeIcon icon={faBed} /></span>
                        <span className='feature-item'>Stays</span>
                    </div>
                    <div className="feature">
                        <span><FontAwesomeIcon icon={faJetFighter} /></span>
                        <span className='feature-item'>Flights</span>
                    </div>
                    <div className="feature">
                        <span ><FontAwesomeIcon icon={faCar} /></span>
                        <span className='feature-item'>Car rentals</span>
                    </div>
                    <div className="feature">
                        <span ><FontAwesomeIcon icon={faShapes} /></span>
                        <span className='feature-item'>Attractions</span>
                    </div>
                    <div className="feature">
                        <span className='feature-item'><FontAwesomeIcon icon={faTaxi} /></span>
                        <span className='feature-item'>Airport taxis</span>
                    </div>

                </div>
                {type !== "lists" && <>

                    <h2 className="headtitle">A lifetime of discounts It`s Genius.</h2>
                    <p className='subtitle'>Get rewarded for your travels-unlock instanat savings of 10% and more with a free LastMinute booking account.</p>

                    <button className="signin">
                        Sign in/Register
                    </button>

                    <div className="all-inputs">
                        <div className="input-1">
                            <FontAwesomeIcon icon={faBed} />
                            <span><input onChange={(e) => setDestination(e.target.value)} type="text" placeholder='Where are you going?' /></span>
                        </div>
                        <div className="input-2" >
                            <FontAwesomeIcon icon={faCalendar} />
                            <span onClick={(handlePickDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {pickdate && <DateRange className='date-range'
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                minDate={new Date()}
                            />}
                        </div>
                        <div className="input-3">
                            <FontAwesomeIcon icon={faPerson} />
                            <span onClick={hideOptions} >{optionItems.adult} adults - {optionItems.children} childrens - {optionItems.room} room/s</span>
                            {option && <div className="optionsContainer">
                                <div className="optionItem">
                                    <span>Adults</span>
                                    <div className="buttons-container">
                                        <button disabled={optionItems.adult <= 1} onClick={() => handleOption("adult", "d")} className="optionButton">-</button>
                                        <span className='option-span'>{optionItems.adult}</span>
                                        <button onClick={() => handleOption("adult", "i")} className="optionButton">+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span>Childrens</span>
                                    <div className="buttons-container">
                                        <button disabled={optionItems.children <= 0} onClick={() => handleOption("children", "d")} className="optionButton">-</button>
                                        <span className='option-span'>{optionItems.children}</span>
                                        <button onClick={() => handleOption("children", "i")} className="optionButton">+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span >Rooms</span>
                                    <div className="buttons-container">
                                        <button disabled={optionItems.room <= 1} onClick={() => handleOption("room", "d")} className="optionButton">-</button>
                                        <span className='option-span'>{optionItems.room}</span>
                                        <button onClick={() => handleOption("room", "i")} className="optionButton">+</button>
                                    </div>

                                </div>

                            </div>}
                        </div>
                        <div className="input-4">
                            <button onClick={handleNavigate} className='search-button'>Search <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span></button>
                        </div>

                    </div>
                </>}

            </div>
        </div>
    )
}

export default Header