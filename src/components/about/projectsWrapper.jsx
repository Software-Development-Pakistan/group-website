import React from 'react';

const ProjectsWrapper = () => {
  return (
    <div id="features-wrapper">
      <section id="features" className="container">
        <header>
          <h2>Projects</h2>
        </header>
        <div className="row">
          <div className="4u 12u(mobile)">

            <section>
              <a href="#" className="image featured"><img src="images/pic01.jpg" alt=""/></a>
              <header>
                <h3>Stack Overflow data analysis 2018</h3>
              </header>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
              </p>
            </section>

          </div>
          <div className="4u 12u(mobile)">

            <section>
              <a href="#" className="image featured"><img src="images/pic02.jpg" alt=""/></a>
              <header>
                <h3>Cron script for hourly Update on Facebookb group page</h3>
              </header>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a </p>
            </section>

          </div>
            <div className="4u 12u(mobile)">

              <section>
                <a href="#" className="image featured"><img src="images/pic01.jpg" alt=""/></a>
                <header>
                  <h3>Stack Overflow data analysis 2018</h3>
                </header>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                </p>
              </section>
            </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsWrapper;
