import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { lightSpeedIn, fadeIn, fadeInRight, pulse, flipInX } from 'react-animations';

const LightIn = styled.div`animation: 1s ${keyframes`${lightSpeedIn}`} `;
const FadeInRight = styled.span`animations: 1s ${keyframes`${fadeInRight}`}`;
const FadeIn = styled.div`animation: 3s ${keyframes`${fadeIn}`} `;
const Pulse = styled.span`animation: 3s ${keyframes`${pulse}`}`;
const FlipInX = styled.span
   `animation: 4s ${keyframes`${flipInX}`}`;

class Header extends Component {
   render() {

      if (this.props.data) {
         var visitor = this.props.data.visitor;
         var name = this.props.data.name;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         var location = this.props.data.address.city + ", " + this.props.data.address.state;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>


               <FlipInX><ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Landing</a></li>
                  <li><a className="smoothscroll" href="#about">Info</a></li>
                  <Pulse><li id="works"><a className="smoothscroll" href="#portfolio">
                     <span> Projects</span></a></li></Pulse>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
                  <li><a className="smoothscroll" href="#other">Other</a></li>
               </ul></FlipInX>

            </nav>

            {/*The goal here is so get animations timed and in sync.  The greeting and nav bar with fade in slightly first, followed by cascading attributes (maybe off by like .2s each), and finally, all of my personal information sliding in to each line  */}
            <div className="row banner">
               <div className="banner-text">
                  <FadeIn><h1 className="responsive-headline">
                     <span className="headline-welcome">Welcome, </span>< br />
                     <span className="header-visitor">{visitor}</span></h1></FadeIn>
                  <h2 className="responsive-headline animated flipInX delay-1s">
                     <span className="headline-emph">id:</span>
                     <span className="header-info"> {name}</span></h2>
                  <h2 className="responsive-headline animated flipInX delay-2s">
                     <span className="headline-emph">href:</span>
                     <span className="header-info"> {location}</span> </h2>
                  <h2 className="responsive-headline animated flipInX delay-3s">
                     <span className="headline-emph">title:</span>
                     <span className="header-info"> {occupation}</span>
                  </h2>
                  <h2 className="responsive-headline animated flipInX delay-4s">
                  <span className="headline-emph">alt:</span>
                     <span className="header-info"> {description}.</span></h2>
                  <hr />
                  <ul className="social">
                     {networks}
                  </ul>
               </div>
            </div>

            <p className="scrolldown">
               <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
            </p>

         </header>
      );
   }
}

export default Header;
