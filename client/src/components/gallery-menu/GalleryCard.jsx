import React from 'react'
import LazyLoad from 'react-lazyload'

import './gallery-card.css'

/**
 * 
 * @param {{minimalImage:string, fullImage:string, previewTitle:string, previewShortText:string}} props
 */
export default function GalleryCard(props) {
    return (
        <LazyLoad once={true} placeholder={<img className='gallery-icon' src={props.minimalImage} alt=''/>} >
            <div className='gallery-icon' style={{'backgroundImage':`url(${props.fullImage})`, cursor:'pointer'}} onClick={e => {}} >
                <div className="gallery-icon-preview">
                    <div className="icon-bg">
                        <h3>{props.previewTitle}</h3>
                        <p>{props.previewShortText}</p>
                    </div>
                </div>
            </div>
        </LazyLoad>
    )
}