import React from 'react'
import './worldproperties.css'
import Loading from '../components/Loading'
import { useFetch } from '../hooks/useFetch'
function WorldProperties() {
    const { data, loading, error, } = useFetch("/hotels/countByCity?cities=sarajevo,istanbul,alta")
    return (
        <>

            {loading ? <Loading /> : <div className="worldProperties">
                {data && <> <div className="world-prop-item">

                    <img className='world-prop-image' src={process.env.PUBLIC_URL + "/images/image1.webp"} alt="img1" />
                    <div className="world-prop-item-wrapper">
                        <h2 className="world-prop-title">Sarajevo</h2>
                        <h2 className="world-prop-desc"> {data[0]} properties</h2>
                    </div>

                </div>
                    <div className="world-prop-item">

                        <img className='world-prop-image' src={process.env.PUBLIC_URL + "/images/image2.webp"} alt="img1" />
                        <div className="world-prop-item-wrapper">
                            <h2 className="world-prop-title">Istanbul</h2>
                            <h2 className="world-prop-desc"> {data[1]} properties</h2>
                        </div>

                    </div>
                    <div className="world-prop-item">

                        <img className='world-prop-image' src={process.env.PUBLIC_URL + "/images/image3.webp"} alt="img1" />
                        <div className="world-prop-item-wrapper">
                            <h2 className="world-prop-title">Alta</h2>
                            <h2 className="world-prop-desc"> {data[2]} properties</h2>
                        </div>

                    </div>  </>}

            </div>
            }
        </>)
}

export default WorldProperties
