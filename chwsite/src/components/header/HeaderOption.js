import React from 'react';
import "../../styles/header/Header.css";

function HeaderOption(props) {
    const { Icon, title } = props;

    return (
        <div className="header__option">
            <Icon/>
            <h3>{title}</h3>
        </div>
    )
}

export default HeaderOption
