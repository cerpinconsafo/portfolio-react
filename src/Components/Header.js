import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { lightSpeedIn, fadeIn, pulse, flipInX } from 'react-animations';

const LightIn = styled.div`animation: 2s ${keyframes`${lightSpeedIn}`} `;
const FadeIn = styled.div`animation: 4s ${keyframes`${fadeIn}`} `;
const Pulse = styled.div`animation: 1s ${keyframes`${pulse}`}infinite`;
const FlipInX = styled.div`animation: 3s ${keyframes`${flipInX}`}`;

class Header extends Component {
   render() {

      if (this.props.data) {
         var visitor = this.props.data.visitor;
         var name = this.props.data.name;
         var occupation = this.props.data.occupation;
         var description = this.props.data.description;
         var city = this.props.data.address.city;
         var networks = this.props.data.social.map(function (network) {
            return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
         })
      }

      return (
         <header id="home">

            <nav id="nav-wrap">

               <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
               <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>


               <FadeIn><ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Landing</a></li>
                  <li><a className="smoothscroll" href="#about">Info</a></li>
                  <li id="works"><a className="smoothscroll" href="#portfolio">
                  <Pulse><span> Works</span></Pulse></a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
                  <li><a className="smoothscroll" href="#other">Other</a></li>
               </ul></FadeIn>

            </nav>

            {/*The goal here is so get animations timed and in sync.  The greeting and nav bar with fade in slightly first, followed by cascading attributes (maybe off by like .2s each), and finally, all of my personal information sliding in to each line  */}
            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">
                     <span className="headline-welcome animated lightSpeedIn fast">Welcome, </span>
                     <span className="header-visitor animated lightSpeedIn delay-1s slower">{visitor}.</span></h1>
                  <h2 className="responsive-headline">
                     <span className="headline-emph">id:</span>
                     <span className="header-info animated flipInX delay-2s"> {name}</span></h2>
                  <h2 className="responsive-headline">
                     <FlipInX><span className="headline-emph">href:</span></FlipInX>
                     <span className="header-info animated delay-2s">{city}</span> </h2>
                  <h2 className="responsive-headline">
                     <span className="headline-emph">title:</span>
                     <span className="header-info">{occupation}</span>
                  </h2>
                  <h3 className="responsive-headline">
                  <LightIn><span className="headline-emph">alt:</span>
                     <span className="header-info">{description}.</span></LightIn></h3>
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
