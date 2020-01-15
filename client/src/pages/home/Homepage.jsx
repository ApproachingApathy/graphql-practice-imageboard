import React from 'react'
import './homepage.css'
import GalleryMenu from '../../components/gallery-menu/GalleryMenu'
import CreateAlbumModal from '../../components/modal/create-album/CreateAlbumModal'

export default class Homepage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="homepage">
                <h1>Hello</h1>
                <div className="content">
                    <GalleryMenu />
                    <GalleryMenu />
                    <GalleryMenu />
                    <GalleryMenu />
                    <GalleryMenu />
                    <GalleryMenu />
                    <GalleryMenu />
                    <GalleryMenu />
                </div>

                <CreateAlbumModal />
            </div>
        )
    }
}