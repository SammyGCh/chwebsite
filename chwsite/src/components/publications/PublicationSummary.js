import React from 'react';
import "../../styles/publications/Publication.css";
import { Avatar } from "@material-ui/core";
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import IconButton from '@material-ui/core/IconButton';

function PublicationSummary(props) {
    const { image, name, summary, date, views} = props;
    return (
      <div className="publicationSummary">
        <img alt="" src={image} />

        <div className="publicationSummary__top">
          <Avatar src="https://static.wixstatic.com/media/f65fa9_ccbe027f7b2247e5bf22c6752882a768%7Emv2.jpg/v1/fit/w_500,h_500,al_c,q_80/file.jpg" />

          <div className="publicationSummary__topInfo">
            <h3>CarolinaH</h3>
            <p>{date}</p>
          </div>
        </div>

        <div className="publicationSummary__center">
          <h3>{name}</h3>
          <p>{summary}</p>
        </div>

        <div className="publicationSummary__bottom">
          <div className="publicationSummary__bottomViews">
            <VisibilityOutlinedIcon />
            <p>{views}</p>
          </div>

          <div className="publicationSummary__bottomIcon">
            <IconButton size="small" aria-label="Leer" aria-hidden="false">
              <ArrowForwardIcon />
            </IconButton>
          </div>
        </div>
      </div>
    );
}

export default PublicationSummary
