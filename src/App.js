/* eslint-disable react/jsx-filename-extension */
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Particles from 'react-particles-js';
import favicon from './logo.ico';
import logo from './logo.png';
import SwirlLeft from './swirl-left.png';
import SwirlRight from './swirl-right.png';
import './App.css';

function App() {
  return (
    <Fragment>
      <Helmet>
        <link rel="icon" href={favicon} type="image/x-icon" />
        <title>Osha & Galih</title>
        <meta name="author" content="Doni Setiawan" />
        <meta name="description" content="Happy weeding Osha and Galih. Happily ever with Osha eonnie, It's going to be beautiful! 27.07.2019" />
        <meta name="keywords" content="wedding, weddingday, love, weddings, time, gift, party, couple, marriage, reception" />
      </Helmet>
      <Particles
        className="Particles"
        params={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                speed: 4,
                size_min: 0.3,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              random: true,
              speed: 1,
              direction: 'top',
              out_mode: 'out',
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: true,
                mode: 'bubble',
              },
              onclick: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              bubble: {
                distance: 250,
                duration: 2,
                size: 0,
                opacity: 0,
              },
              repulse: {
                distance: 400,
                duration: 4,
              },
            },
          },
        }}
      />
      <section className="center">
        <h2>Happy Wedding</h2>
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <h1>
          Osha & Galih
        </h1>
        <p className="center">Happily ever with Osha eonnie, It's going to be beautiful!</p>
        <div className="title-date">
          <img src={SwirlLeft} className="swirl-left" alt="swirl-left" />27.07.2019
          <img src={SwirlRight} className="swirl-right" alt="swirl-right" />
        </div>
      </section>
    </Fragment>
  );
}

export default App;
