import React from 'react'

import GalleryCard from './GalleryCard'
import './gallery-menu.css'


export default class GalleryMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="gallery-menu">
                <div className="gallery-title">
                    <h2>Title</h2>
                </div>
                <div className="gallery">
                    <GalleryCard
                        minimalImage='https://via.placeholder.com/6x9/png' 
                        fullImage='https://via.placeholder.com/200x300/png'
                        previewTitle='Picture'
                        previewShortText='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt nisi aperiam accusamus, animi fugit eveniet!'
                    />
                </div>
            </div>
        )
    }
}