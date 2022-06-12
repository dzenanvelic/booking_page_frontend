import React from 'react'
import './loading.css'
function Loading() {
    return (
        <div className='loading'>
            <div className="center">
                <div className="ring">
                    <span className='loadingSpan'>loading...</span>
                </div>
            </div>
        </div>
    )
}

export default Loading