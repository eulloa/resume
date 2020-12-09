import React from 'react';
import src from './Images/bio.jpg';

export const About = () => (
   <div className="container">
      <div className="row p-4">
         <div className="mx-auto text-white d-flex m-stack">
            <img className="bio" src={src} alt="c'est moi" />
            <div className="d-flex flex-column justify-content-center pl-4 m-stack contact">
               <h2 className="badge badge-dark">Efren Ulloa</h2>
               <h6>Software Engineer</h6>
               <div className="container logo-container">
                  <div className="github-logo logo"></div>
                  <a className="text-white pl-4 text-decoration-none" href="https://github.com/eulloa">github.com/eulloa</a>
               </div>
               <div className="container logo-container">
                  <div className="mail-logo logo"></div>
                  <a className="text-white pl-4 text-decoration-none" href="mailto:eulloa345@gmail.com">eulloa345@gmail.com</a>
               </div>
            </div>
         </div>
      </div>
      <div className="row p-4">
         <section className="text-white">
            <h2 className="badge badge-dark">Background</h2><br />
            <p className="text-background">Front end focused, full stack engineer with 6 years of professional software development experience.
               A fast learner with a proven track record for delivering results in a deadline driven environment, I am
               looking for a challenging position where the intersection of technology and software development can be leveraged
               to achieve business goals and success.
            </p>
         </section>
      </div>
   </div>
);
