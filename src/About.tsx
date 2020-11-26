import React from 'react';

export const About = () => (
   <div className="container-sm bg-secondary">
      <div className="row border-right border-left p-4">
         <div className="mx-auto text-white d-flex m-stack">
            <img
               src="https://justsomething.co/wp-content/uploads/2014/03/beautiful-cat-pictures-4.jpg"
               style={{
               height: '250px',
               width: '250px',
               borderRadius: '250px'
               }}
               alt="c'est moi"
            />
            <div className="d-flex flex-column justify-content-center pl-4 m-stack contact">
               <h2>Efren Ulloa</h2>
               <h6>Software Engineer</h6>
               <div className="container logo-container">
                  <div className="github-logo logo"></div>
                  <a className="text-white pl-4" href="https://github.com/eulloa">github.com/eulloa</a>
               </div>
               <div className="container logo-container">
                  <div className="mail-logo logo"></div>
                  <a className="text-white pl-4" href="mailto:eulloa345@gmail.com">eulloa345@gmail.com</a>
               </div>
            </div>
         </div>
      </div>
      <div className="row border-right border-left border-top p-4">
         <span className="border-top border-primary"></span>
         <section className="text-white">
            <p>Front end focused, full stack engineer with 6 years of professional software development experience.
               A fast learner with a proven track record for delivering results in a deadline driven environment, I am
               looking for a challenging position where the intersection of technology and software development can be applied
               to achieve business goals and success.
            </p>
         </section>
      </div>
   </div>
);
