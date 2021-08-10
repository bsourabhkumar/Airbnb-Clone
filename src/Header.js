import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Avatar} from "@material-ui/core"
import { Link } from "react-router-dom"
import { useHistory } from "react-router-dom"

    


function Header() {
    const history = useHistory();
    return (
        <div className="header">
        <Link to='/'>
        <img 
            className="header_icon"
            src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-logo.jpg"
            alt=""
        />
        </Link>
        <div className="header_center">
            <input placeholder="Start your search here" type="text" />
            <SearchIcon onClick={() => history.push('/search')}/>

        </div>
        <div className="header_right">
            <p>Become a host</p>
            <LanguageIcon  className="licon"/>
            <ExpandMoreIcon className="expand-icon" />
            <Avatar className="avatar"/>

        </div>
            
    </div>
    )
}

export default Header
