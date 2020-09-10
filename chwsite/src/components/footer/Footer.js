import React from 'react';
import "../../styles/footer/Footer.css";
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__copyright">
                <p>©2020 por Carolina Hermida</p>
            </div>
            <div className="footer__socialMedias">
                <IconButton aria-label="Facebook" href="https://www.facebook.com" target="_blank">
                    <FacebookIcon/>
                </IconButton>

                <IconButton aria-label="Facebook" href="https://www.instagram.com" target="_blank">
                    <InstagramIcon/>
                </IconButton>
            </div>
        </div>
    )
};

export default Footer
