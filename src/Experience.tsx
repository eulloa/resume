import React from 'react';

export const Experience = () => (
   <div className="container">
      <div className="p-4">
         <h2 className="badge badge-black-transparent text-white">Experience</h2>
         <div className="mt-4 mb-4 text-white">
            <h2 className="badge badge-pill badge-light">BluePallet</h2>
            <div className="text-background">
               <h6 className="text-blue">Senior Software Engineer (March 2021 - Present)</h6>
               <ul>
                  <li>
                     Lead engineer on legacy web UI marketplace application in charge of feature development, identifying opportunites to scale,
                     optimize and using tools like Google Lighthouse, audit vital web metrics to maximize application performance
                  </li>
                  <li>
                     Identified key solution for redundant client side network requests by implementing a fully functional and scalable GraphQL
                     POC using Hasura Cloud that eliminates unnecessary fetching using Apollo Client's powerful caching features
                  </li>
                  <li>
                     Led development of project to refactor onboarding module which significantly improved users ability to register seamlessly on the
                     platform which was also optimized for mobile devices
                  </li>
                  <li>
                     Craft solutions for monitoring client side performance and Javascript bundle size such as creating a bundle size analysis script of changes
                     consumable by a Datadog monitoring service
                  </li>
                  <li>
                     Engineered a revenue report program using a serverless AWS Lambda written in Golang to read data from a MySQL RDS in an AWS VPC
                     and generate a report for consumption by accounting team
                  </li>
                  <li>
                     Lead engineer on a UI marketplace rebuild project responsible for building the foundation and structure including incorporating a framework and a component library,
                     hook up Renove for auto generated project dependency pull requests, adding project versioning ahdering to semantic versioning and incorporating DangerJS to automate common review chores as well as
                     handling building of the project in CircleCI and deploying the newly built Dockerized image to AWS ECR.
                  </li>
                  <li>
                     Drive integration test project which included Cypress to run unit, integration and smoke test suites for legacy and web marketplace applications.
                     Additionally, ensure that the tests run as part of a CircleCI continuous integration build server
                  </li>
                  <li>
                     Deploy projects to different environments using AWS Codebuild, Amplify and ECS services
                  </li>
               </ul>
            </div>
         </div>
         <div className="mb-4 text-white">
            <h2 className="badge badge-pill badge-light">Expedia Group</h2>
            <div className="text-background">
               <h6 className="text-blue">Software Development Engineer II (Aug 2020 - Feb 2021)</h6>
               <ul>
                  <li>Help and guide new team of UI developers to ramp up on new company GraphQL tech stack</li>
                  <li>Help team accomplish first customer traffic goals by tackling and implementing feature gaps</li>
                  <li>Conduct interviews to identify and onboard quality dev talent</li>
                  <li>Groom and mentor junior engineers</li>
                  <li>Present finished projects/modules to senior partners and VIPs</li>
               </ul>
               <h6 className="text-blue">Software Development Engineer I (Nov 2017 - Aug 2020)</h6>
               <ul>
                  <li>Played a critical role in migrating a React mobile progressive web application to tablet/desktop 
                     viewports used by thousands of travel customers around the world
                  </li>
                  <li>Responsible for writing unit, integration and smoke tests to ensure technical accuracy of production code</li>
                  <li>Regular participation in code and pull request reviews, grooming sessions, retrospectives and other best team practices</li>
                  <li>Contributed to backend microservice layers in Kotlin and Java when necessary</li>
                  <li>Helped lead initial exploration into refactoring existing MobX React components into standalone GraphQL
                     connected React components
                  </li>
                  <li>Responsible for configuring and integrating tools into existing Jenkins automation jobs</li>
                  <li>Monitor code releases and investigate production issues using tools like Splunk and Grafana</li>
               </ul>
            </div>
         </div>
         <div className="mb-4 text-white">
            <h2 className="badge badge-pill badge-light">gyro</h2>
            <div className="text-background">
               <h6 className="text-blue">Developer (Sep 2014 - June 2017)</h6>
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
               <h6 className="text-blue">Developer (Nov 2013 - Sep 2014)</h6>
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
