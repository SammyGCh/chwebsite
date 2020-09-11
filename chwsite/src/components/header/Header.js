import React from 'react';
import "../../styles/header/Header.css";
import "../../styles/common/Link.css";
import HeaderTitle from "./HeaderTitle";
import HomeIcon from '@material-ui/icons/Home';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import PersonIcon from '@material-ui/icons/Person';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
import HeaderOption from './HeaderOption';
import { Link } from 'react-router-dom';
import Sticky from 'react-stickynode';

function Header() {
    return (
      <Sticky>
      <nav className="header">
        <HeaderTitle />

        <div className="header__options">
          <Link to="/" className="link">
            <HeaderOption Icon={HomeIcon} title="Inicio" />
          </Link>

          <Link to="/acerca-de" className="link">
            <HeaderOption Icon={PersonIcon} title="Sobre mí" />
          </Link>

          <HeaderOption Icon={CollectionsBookmarkIcon} title="Publicaciones" />

          <HeaderOption Icon={PhotoLibraryIcon} title="Galería" />

          <HeaderOption Icon={ChatBubbleIcon} title="Contacto" />
        </div>
      </nav>
      </Sticky>
    );
}

export default Header
