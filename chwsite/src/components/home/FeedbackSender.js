import React from 'react';
import "../../styles/home/FeedbackSender.css";
import Card from "../common/Card";
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

function FeedbackSender() {
    return (
      <Card className="feedbackSender">
        <div className="feedbackSender__top">
          <h1>Déjame tu opinión</h1>
          <h2>¿Qué te pareció mi contenido?</h2>
        </div>

        <div className="feedbackSender__center">
          <form>
            <div className="feedbackSender__name">
              <input placeholder="Nombre (s)" required="true"/>
              <input placeholder="Apellidos"/>
            </div>

            <div className="feedbackSender__email">
              <input type="email" placeholder="Correo electrónico"/>
            </div>

            <div className="feedbackSender__comment">
              <textarea placeholder="¿Cómo puedo mejorar? ¿Qué más te interesa?"/>
            </div>
          </form>
        </div>

        <div className="feedbackSender__bottom">
          <Button variant="contained" startIcon={<SendIcon/>}>
            Enviar
          </Button>
        </div>
      </Card>
    );
}

export default FeedbackSender
