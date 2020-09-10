import React from 'react';
import "../../styles/home/Home.css";
import Card from "../common/Card";
import PublicationSummary from '../publications/PublicationSummary';
import Grid from '@material-ui/core/Grid';
import {PUBLICATIONDATA} from "../../data/PublicationData";
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

function TopPublicationsContainer() {
  const publications = PUBLICATIONDATA.map((publication) => {
    if(publication.isTop) {
      return (
        <Grid item xs={3} key={publication.id}>
          <PublicationSummary
            image={publication.image}
            name={publication.name}
            summary={publication.summary}
            date={publication.date}
            views={publication.views}
          />
        </Grid>
      );
    }

    return "";
  });

    return (
      <Card className="topPublicationsContainer">
        <div className="topPublicationsContainer__title">
          <h2>Publicaciones principales</h2>
        </div>

        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
          className="topPublicationsContainer__grid"
        >
          {publications}
        </Grid>

        <div className="topPublicationsContainer__option">
          <Button variant="contained" endIcon={<ArrowForwardIcon/>}>
            Ver todas
          </Button>
        </div>
      </Card>
    );
}

export default TopPublicationsContainer
