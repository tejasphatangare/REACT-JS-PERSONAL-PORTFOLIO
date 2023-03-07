import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <>
        <section className="services" id="services">
          <h1 className="heading">
            {" "}
            <span> my </span> services{" "}
          </h1>

          <div className="box-container">
            <div className="box tilt">
              <i className="fas fa-code"></i>
              <h3>web development</h3>
              <p className="letcenter">
                I am Providing The Best Front End Web Developments Services.
                Using The HTML,CSS (Tailwind/Bootstrap), JS(REACT)
              </p>
            </div>

            <div className="box tilt">
              <i className="fas fa-paint-brush"></i>
              <h3>graphic design</h3>
              <p className="letcenter">
                Graphic designers use various tools such as software, sketches,
                and prototypes to create designs that can be used in print,
                digital media.
              </p>
            </div>

            <div className="box tilt">
              <i className="fas fa-bullhorn"></i>
              <h3>VideoEditing</h3>
              <p className="letcenter">
                We can be done Video editing using specialized software programs
                such as Adobe Premiere Pro, Final Cut Pro, or Davinci Resolve.
              </p>
            </div>

            <div className="box tilt">
              <i className="fas fa-envelope"></i>
              <h3>email marketing</h3>
              <p className="letcenter">
                The goal of Our email marketing is to build customer loyalty,
                increase brand awareness, and generate leads and sales.
              </p>
            </div>

            <div className="box tilt">
              <i className="fas fa-mobile"></i>
              <h3>Bootstrap</h3>
              <p className="letcenter">
                We Use Bootstrap that provides JavaScript plugins that enhance
                the functionality of the UI components.
              </p>
            </div>

            <div className="box tilt">
              <i className="fab fa-wordpress"></i>
              <h3>Tailwind</h3>
              <p className="letcenter">
                we use Tailwind's utility classes which are highly composable,
                meaning that they can be combined and reused in a variety of
                ways to achieve a wide range of designs
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Services;
