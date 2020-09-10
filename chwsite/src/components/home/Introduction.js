import React from 'react';
import "../../styles/home/Home.css";
import Card from "../common/Card";

function Introduction() {
    return (
      <Card className="introduction">
        <img
          className="introduction__image"
          alt=""
          src="https://static.wixstatic.com/media/f65fa9_311ebb5768184bb49874154bf52b720e~mv2.jpg/v1/fill/w_1682,h_594,al_c,q_85/f65fa9_311ebb5768184bb49874154bf52b720e~mv2.webp"
        />

        <div className="introduction__title">
          <h1>Bienvenidos</h1>
        </div>

        <div className="introduction__summary">
          <p>
            Me emociona mucho que estés aquí. Tengo tanto que quiero compartir y
            estoy emocionada de presentar mis pasiones y áreas de interés. Así
            que relájate y piérdete en cada fotografía, historia o reflexión que
            he preparado con mucho cariño para ti.
          </p>
        </div>
      </Card>
    );
}

export default Introduction
