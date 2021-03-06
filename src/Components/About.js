import React, { Component } from 'react';
import DownloadPDF from './DownloadPDF';

import "react-pdf/dist/Page/AnnotationLayer.css";

class About extends Component {
  render() {

    if(this.props.data){
      
      var name = this.props.data.name;
      var profilepic= "images/"+this.props.data.image;
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var email = this.props.data.email;
      // var artweb = this.props.data.artweb;
      // var musicweb = this.props.data.musicweb;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Info</h2>
                  <p className="address">
						   <span>{name}</span><br />
						   <span>{street}<br />
						         {city} {state}, {zip}
                   </span><br />
                     <span>{email}</span>
					   </p>
                  <h2>Other Work</h2>
                     <span><a target="_blank" href="http://www.patrickskolskyart.com" > Art</a></span><br />
                     <span><a target="_blank" href="http://www.soundcloud.com/cavi-caligula" > Music</a></span><br />
               </div>
               <div className="columns download">
                  <p>
                     <DownloadPDF/>
                     
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
