import React, { Component } from 'react'

export class About extends Component {
  render() {
    return (
      <>
       <section className="about" id="about">

<h1 className="heading"> about <span>me</span> </h1>

<div className="row">

    <div className="image">
        <img className="tilt" src="tejas-2.jpeg" alt="profile"/>
    </div>

    <div className="content">
        <h3>Hey..!<span> Phatangare Tejas </span> </h3>
        <p className="info">Hey Everyone i Am Tejas Phatangare & i Am A FrontEnd Web Developer & My Objectives Are To obtain a challenging position as a Front End Web Developer, utilizing my skills in HTML, CSS, JavaScript, and React Js to create visually appealing and user-friendly websites.</p>
        <div className="box-container">
            <div className="box">
                <p> <span> age: </span> 20 </p>
                <p> <span> gender: </span> Male </p>
                <p> <span> Experience : </span> 1 Month </p>
                <p> <span> freelance : </span> Not Available </p>
            </div>
            <div className="box">
                <p> <span> language : </span> English </p>
                <p> <span> phone : </span> 7038643242 </p>
                <p> <span> email : </span> tejasphatangare2109@gmail.com </p>
                <p> <span> address : </span> Sangamner,Maharashtra</p>
            </div>
        </div>
        <a href="public\Final PDF.pdf" className="btn">Download Resume</a>
    </div>

</div>

</section>
      </>
    )
  }
}

export default About
