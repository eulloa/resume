import React from 'react';

export const Experience = () => (
   <div className="container">
      <div className="row p-4">
         <h2 className="badge badge-dark">Experience</h2>
         <div className="mt-4 mb-4 text-white">
            <h2 className="badge badge-pill badge-light">Expedia Group</h2>
            <div className="text-background">
               <h6>Software Development Engineer II (Aug 2020 - Present)</h6>
               <ul>
                  <li>Help and guide new organization + team of UI developers ramp up on new tech stack</li>
                  <li>Serve as mentor for junior engineers</li>
                  <li>Present finished projects/modules to senior partners and VIPs</li>
               </ul>
               <h6>Software Development Engineer I (Nov 2017 - Aug 2020)</h6>
               <ul>
                  <li>Played a critical role in migrating a React mobile progressive web application to tablet/desktop 
                     viewports used by thousands of travel customers around the world
                  </li>
                  <li>Responsible for writing unit, integration and smoke tests to ensure technical accuracy of production code</li>
                  <li>Contributed to backend microservice layers in Kotlin and Java when necessary</li>
                  <li>Helped lead initial exploration into refactoring existing MobX connected React components into standalone GraphQL
                     connected React components
                  </li>
                  <li>Responsible for fine-tuning and integrating new tools into existing Jenkins automation jobs</li>
                  <li>Monitor code releases and investigate production issues using tools like Splunk and Grafana</li>
                  <li>Refactored JSX React to TSX React</li>
               </ul>
            </div>
         </div>
         <div className="mb-4 text-white">
            <h2 className="badge badge-pill badge-light">gyro</h2>
            <div className="text-background">
               <h6>Developer (Sep 2014 - June 2017)</h6>
               <ul>
                  <li>Authored and contributed to full stack web develoment projects, with an emphasis on front end features,
                     browser manipulation and cross-browser compatibility for a variety of clients such as John Deere, Peak Auto and
                     Cars.com
                  </li>
                  <li>Developed applications and websites leveraging 3rd party REST APIs such as YouTube's iFrame Player API
                     and Twitter's API
                  </li>
                  <li>Led development on a project that turned a dated and previously unresponsive application into a 100% fully
                     responsive mobile web application
                  </li>
               </ul>
            </div>
         </div>
         <div className="mb-4 text-white">
            <h2 className="badge badge-pill badge-light">Guaranteed Rate</h2>
            <div className="text-background">
               <h6>Developer (Nov 2013 - Sep 2014)</h6>
               <ul>
                  <li>Worked closely with senior developers to contribute to in house API infrastructure using C# and ASP.NET Web API</li>
                  <li>Researched and led initiative to choose an open-source solution for stress and loading testing web applications, including
                     implementing a proof of concept
                  </li>
               </ul>
            </div>
         </div>
      </div>
   </div>
);
