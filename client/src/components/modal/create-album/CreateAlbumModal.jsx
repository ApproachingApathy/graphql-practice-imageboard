import React from 'react'
import './create-album-modal.css'
import '../modal.css'

export default class CreateAlbumModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="modal modal-create-album">
                <div className="modal-header">
                    <h3>Create Album</h3>
                </div>
                <div className="modal-form-container">
                    <form className="modal-form">
                        <input className='modal-input' type="text" name="album-name" id="album-name" placeholder="Album Name" />
                        <textarea className='modal-input modal-textarea' name="album-desc" id="" cols="30" rows="5" placeholder='Album Description'></textarea>
                        <div className="modal-buttons">
                            <button className='modal-dialog-button modal-dialog-button-reject'>Cancel</button>
                            <button className='modal-dialog-button modal-dialog-button-accept'>Create Album</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}