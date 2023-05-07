import React from "react";
import Layout from "../components/Layout";
import '../styles/About.css'

const About = () => {
  return (
  <Layout>
    <div className="aboutsection">
      <div className="container">
          <h1>Our Story</h1>
        <div className="aboutsection-first-details">
          <h2><strong>Our Life Partner</strong> offers an opportunity and efficient way to find a life partner. With 
            advanced algorithms and filters, you can easily find someone who shares your values, beliefs, and interests. We have millions of registered users from different parts of the country, and filters to match people based on their choices, interests, and lifestyle. </h2>
          </div>
          <div className="aboutsection-second-details">
            <h1>Way To Find A Partner</h1>
            <div className="aboutsection-second-details-way">
              <div className="make">
                <h2>Make</h2>
                <p>To start the process, you need to create a profile on our life partner website.</p>
              </div>
              <div className="meet">
                <h2>Meet</h2>
                <p>To start the process, you need to create a profile on our life partner website.</p>

              </div>
              <div className="marry">
                <h2>Marry</h2>
                <p>To start the process, you need to create a profile on our life partner website.</p>

              </div>
            </div>
          </div>
      </div>
    </div>
  </Layout>
)
};

export default About;
