import src from './Images/bio.jpg';

export const About = () => (
   <div className="container about">
      <div className="row p-4">
         <div className="mx-auto text-white d-flex m-stack">
            <img className="bio" src={src} alt="c'est moi" />
            <div className="d-flex flex-column justify-content-center pl-4 m-stack contact">
               <h2 className="badge badge-black-transparent">Efren Ulloa</h2>
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
            <h2 className="badge badge-black-transparent">Background</h2><br />
            <p className="text-background">
              Compassionate, curious and highly motivated AI first software engineer with over a decade of professional software industry experience. I specialize in full stack development and I'm passionate about building resilient software with automation, DevOps, a strong testing foundation, functional programming and by leveraging the power of AI to conceive, iterate and execute at a speed that can match the needs of your business.
            <br /><br />
              In my current work, I am focused on creating sensible boundaries between software systems that promote modularity and simplicity. These days, writing code isn't done by hand any longer but the principles of good engineering are more important than ever before. When it comes to the world of software development, the sky is the limit - let's build something incredible together!
            </p>
         </section>
      </div>
   </div>
);

