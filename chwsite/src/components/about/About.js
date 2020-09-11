import React from 'react';
import "../../styles/about/About.css";
import Card from "../common/Card";

function About() {
    return (
      <Card className="about">
        <img
          className="about__image"
          alt=""
          src="https://static.wixstatic.com/media/f65fa9_6d61a9f8cf434d00a99607f19a1a3faf~mv2.jpg/v1/fill/w_864,h_319,al_c,lg_1,q_80/f65fa9_6d61a9f8cf434d00a99607f19a1a3faf~mv2.webp"
        />

        <div className="about__title">
          <h1>Sobre mí</h1>
        </div>

        <div className="about__content">
          <p>
            No les pasa que cuando les preguntan: “Quién eres, cuéntame de ti”,
            se quedan pensando sin saber qué decir?… bueno, a mí sí me pasa y a
            veces no encuentro las palabras perfectas para describirme,
            definirme.
          </p>
          <p>
            Comenzaré escribiendo que soy estudiante de Comunicación, y disfruto
            mucho mi carrera, me gusta leer y escribir, aunque a veces me cueste
            hilar las ideas, como ahora.
          </p>
          <p>
            Soy de una linda y quieta ciudad declarada Patrimonio de la
            Humanidad, la bella perla del Papaloapan, Tlacotalpan. Desde el año
            2009, y estando bien pequeña, me he desenvuelto en el ámbito
            cultural; sé tocar jarana, bailar son jarocho y también versitos sé
            hacer.
          </p>
          <p>
            El son jarocho se ha convertido en algo muy importante en mi vida,
            en algo parte de mí que se siente cada que rasgueo mi jarana y canto
            algunos versitos; estos andares me han abierto muchas oportunidades
            y gracias a ello, he podido viajar al extranjero y he podido conocer
            más esta cultura, pues en cada región de Veracruz su interpretación
            es de diferentes maneras, como en todo.
          </p>
          <p>
            He sido conductora de eventos de son jarocho en Tlaquito, como los
            Encuentros Nacionales de Jaraneros y Decimistas en el marco de las
            Fiestas de la Candelaria por más de 3 años y entre otros.
          </p>
          <p>
            Disfruto mucho asistir a los fandangos, conocer a las personas y las
            historias de los pueblitos.
          </p>
          <p>
            Soy Vigía del Patrimonio Cultural y he estado trabajando en la
            preservación y valoración del patrimonio cultural material e
            inmaterial de Tlaco.
          </p>
          <p>
            Soy feminista, una persona muy amable y carismática, casi siempre me
            vas a ver sonriendo.
          </p>
          <p>
            Soy integrante y fundadora de dos grupos de son jarocho, en uno
            “Amanecer del Taller de Son y Versada”, llevo más de 10 años y en el
            otro: “Guardarraya” apenas 3 años.
          </p>
        </div>
      </Card>
    );
}

export default About
