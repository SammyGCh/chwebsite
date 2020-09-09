import React from 'react';
import "../../styles/header/Header.css";
import HeaderTitle from "./HeaderTitle";
import HomeIcon from '@material-ui/icons/Home';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import HeaderOption from './HeaderOption';

function Header() {
    return (
      <div className="header">
        <HeaderTitle />

        <div className="header__options">
          <HeaderOption Icon={HomeIcon} title="Inicio"/>

          <HeaderOption Icon={PersonIcon} title="Sobre mí" />

          <HeaderOption Icon={CollectionsBookmarkIcon} title="Publicaciones" />

          <HeaderOption Icon={PhotoLibraryIcon} title="Galería" />

          <HeaderOption Icon={ChatBubbleIcon} title="Contacto" />
        </div>
      </div>
    );
}

export default Header
