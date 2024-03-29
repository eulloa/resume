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
               Compassionate, ever curious and highly motivated software engineer with nearly 10 years of professional software development experience.
               I'm interested in blockchain and full stack software development, automation, dev-ops, testing, functional programming and writing clean and scalable production ready code.
               I believe learning never stops and that we often have to fail and break things in order to fully understand them. When it comes to
               the world of software development, the sky is the limit - let's build something incredible together!
            </p>
         </section>
      </div>
   </div>
);
