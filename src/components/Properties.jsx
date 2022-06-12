import React from 'react'
import './properties.css'
import { useFetch } from '../hooks/useFetch'
import Loading from '../components/Loading'
function Properties() {
    const { data, loading, error, } = useFetch("/hotels/countByType")
    // console.log("Propdata", data)
    return (
        <div className="properties-container">


            <h2 className="title-properties">Browse by property type</h2>
            {loading ? <Loading /> : <> {data && <div className="properties-type">
                <div className="property-type-item">
                    <img className='property-type-image' src={process.env.PUBLIC_URL + "/images/image4.webp"} alt="" />
                    <div className="property-type-item-desc-cont">
                        <h4 className="property-type-title"> {data[0]?.type}</h4>
                        <p className="property-type-desc">{data[0]?.count} {data[0]?.type}</p>
                    </div>
                </div>
                <div className="property-type-item">
                    <img className='property-type-image' src={process.env.PUBLIC_URL + "/images/image5.jpg"} alt="" />
                    <div className="property-type-item-desc-cont">
                        <h4 className="property-type-title">{data[1]?.type}</h4>
                        <p className="property-type-desc">{data[1]?.count} {data[1]?.type}</p>
                    </div>
                </div>
                <div className="property-type-item">
                    <img className='property-type-image' src={process.env.PUBLIC_URL + "/images/image6.jpg"} alt="" />
                    <div className="property-type-item-desc-cont">
                        <h4 className="property-type-title">{data[2]?.type}</h4>
                        <p className="property-type-desc">{data[2]?.count} {data[2]?.type}</p>
                    </div>
                </div>
                <div className="property-type-item">
                    <img className='property-type-image' src={process.env.PUBLIC_URL + "/images/image7.jpg"} alt="" />
                    <div className="property-type-item-desc-cont">
                        <h4 className="property-type-title">{data[3]?.type}</h4>
                        <p className="property-type-desc">{data[3]?.count} {data[3]?.type}</p>
                    </div>
                </div>
                <div className="property-type-item">
                    <img className='property-type-image' src={process.env.PUBLIC_URL + "/images/image8.jpg"} alt="" />
                    <div className="property-type-item-desc-cont">
                        <h4 className="property-type-title">{data[4]?.type}</h4>
                        <p className="property-type-desc">{data[4]?.count} {data[4]?.type}</p>
                    </div>
                </div>
            </div>}
            </>}

        </div>
    )
}

export default Properties