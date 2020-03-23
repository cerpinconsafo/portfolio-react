import React, { Component } from 'react';

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

               <ul id="nav" className="nav">
                  <li className="current"><a className="smoothscroll" href="#home">Landing</a></li>
                  <li><a className="smoothscroll" href="#about">Info</a></li>
                  <li id="works"><a className="smoothscroll" href="#portfolio">Works</a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
                  <li><a className="smoothscroll" href="#other">Other</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">Welcome, {visitor}.</h1>
                  <h2 className="responsive-headline">id: {name}</h2>
                  <h2 className="responsive-headline"><span>href: {city}</span> </h2>
                  <h2 className="responsive-headline"><span>title: {occupation}</span></h2>
                  <h3 className="responsive-headline">alt: {description}.</h3>
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