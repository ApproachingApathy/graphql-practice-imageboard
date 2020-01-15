import React from 'react'
import './sidebar.css'

import iconMenu from '../../assets/images/icons/menu.svg'
import iconMenuOpen from '../../assets/images/icons/menu_open-24px.svg'
import iconUpload from '../../assets/images/icons/cloud_upload-24px.svg'
import iconNewFolder from '../../assets/images/icons/create_new_folder-24px.svg'

export default class Sidebar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isMenuExpanded:false}
    }

    handleSidebarExpand(e) {
        this.setState({
            ...this.state,
            isMenuExpanded: !this.state.isMenuExpanded
        })
    }

    render() {
        const SidebarButton = (props) => {
            return (
                <div className='sidebar-button' onClick={props.onClick}>
                    <img 
                        className='icon' 
                        src={props.iconSrc} 
                        alt={props.alt} 
                        height='48' 
                        width='48'
                    />
                    <div className="sidebar-button-label" hidden={props.isLabelHidden}>
                        {props.buttonLabel}
                    </div>
                </div> 
            )
        }

        const isLabelHidden = !this.state.isMenuExpanded
        return (
            <aside id='sidebar' className={this.state.isMenuExpanded ? 'sidebar-main sidebar-main-expanded' : 'sidebar-main'}>
                <SidebarButton 
                    iconSrc={this.state.isMenuExpanded ? iconMenuOpen : iconMenu}
                    alt='Hamburger Menu button'
                    onClick={e => this.handleSidebarExpand(e)}
                    isLabelHidden={isLabelHidden}
                    buttonLabel='Menu'
                />
                <SidebarButton
                    iconSrc={iconNewFolder}
                    alt='Folder with a plus sign'
                    onClick={e => {}}
                    isLabelHidden={isLabelHidden}
                    buttonLabel='Create Album'
                />
                <SidebarButton
                    iconSrc={iconUpload}
                    alt='Cloud with arrow pointing up.'
                    onClick={e => {}}
                    isLabelHidden={isLabelHidden}
                    buttonLabel='Upload'
                />
            </aside>
        )
    }
}