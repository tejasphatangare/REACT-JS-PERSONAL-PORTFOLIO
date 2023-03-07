import React, { Component } from "react";

export class Contact extends Component {
  render() {
    return (
      <>
        <section className="contact" id="contact">
          <h4 className="heading">
            {" "}
            Contact <span> Me </span>{" "}
          </h4>

          <div className="row">
            <div className="image">
              <img className="tilt tejas" src="contact us.jpeg" alt="" />
            </div>

            <form action="">
              <div className="inputBox">
                <input type="text" placeholder="Enter Your Name Here" />
                <input type="email" placeholder="Enter Your Email Here" />
              </div>

              <input
                type="text"
                placeholder="Subject"
                className="box"
              />

              <textarea
                placeholder="Write Your Message Here..!"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>

              <input type="submit" className="btn" value="send message" />
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
