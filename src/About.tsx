import React from 'react';

export const About = () => (
   <div className="container bg-secondary">
      <div className="row border-right border-left p-3">
         <div className="mx-auto text-white">
         <figure className="figure col">
            <img
               className="figure-img img-fluid"
               src="https://justsomething.co/wp-content/uploads/2014/03/beautiful-cat-pictures-4.jpg"
               style={{
               height: '250px',
               width: '250px',
               borderRadius: '250px'
               }}
            />
         </figure>
         </div>
         <section className="col-6 text-white">
         <h4>Chicago, IL - eulloa345@gmail.com</h4>
         <span>Front end focused, full stack engineer with 6 years of professional software development experience.
            A fast learner with a proven track record for delivering results in a deadline driven environment, I am
            looking for a challenging position where the blending of technology and software development can be applied
            to achieve business goals and success.
         </span>
         </section>
      </div>
   </div>
);
