import React from 'react';
import Particles from "react-tsparticles";

export const ParticlesComponent = () => (
   <Particles
     id="tsparticles"
     options={{
       background: {
         color: {
           value: "#007bff",
         },
       },
       fpsLimit: 60,
       interactivity: {
         detectsOn: "canvas",
         modes: {
           bubble: {
             distance: 400,
             duration: 2,
             opacity: 0.8,
             size: 40,
           },
           push: {
             quantity: 4,
           },
           repulse: {
             distance: 200,
             duration: 0.4,
           },
         },
       },
       particles: {
         color: {
           value: "#ffffff",
         },
         links: {
           color: "#ffffff",
           distance: 150,
           enable: true,
           opacity: 0.5,
           width: 1,
         },
         collisions: {
           enable: true,
         },
         move: {
           direction: "none",
           enable: true,
           outMode: "bounce",
           random: false,
           speed: 1,
           straight: false,
         },
         number: {
           density: {
             enable: true,
             value_area: 800,
           },
           value: 80,
         },
         opacity: {
           value: 0.5,
         },
         shape: {
           type: "circle",
         },
         size: {
           random: true,
           value: 5,
         },
       },
       detectRetina: true,
     }}
   />
);
