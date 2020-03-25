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

               <ul id="nav" className="nav animated fadeIn slow">
                  <li className="current"><a className="smoothscroll" href="#home">Landing</a></li>
                  <li><a className="smoothscroll" href="#about">Info</a></li>
                  <li id="works"><a className="smoothscroll" href="#portfolio">
                     <span className="animated infinite bounce delay-2s"> Works</span></a></li>
                  <li><a className="smoothscroll" href="#resume">Resume</a></li>
                  <li><a className="smoothscroll" href="#contact">Contact</a></li>
                  <li><a className="smoothscroll" href="#other">Other</a></li>
               </ul>

            </nav>

            <div className="row banner">
               <div className="banner-text">
                  <h1 className="responsive-headline">
                     <span className="headline-welcome animated lightSpeedIn fast">Welcome, </span>
                     <span className="header-visitor animated lightSpeedIn delay-1s slower">{visitor}.</span></h1>
                  <h2 className="responsive-headline">
                     <span className="headline-emph">id:</span>
                     <span className="header-info animated flipInX delay-2s"> {name}</span></h2>
                  <h2 className="responsive-headline">
                     <span className="headline-emph">href:</span>
                     <span className="header-info">{city}</span> </h2>
                  <h2 className="responsive-headline">
                     <span className="headline-emph">title:</span>
                     <span className="header-info">{occupation}</span>
                  </h2>
                  <h3 className="responsive-headline">
                     <span className="headline-emph">alt:</span>
                     <span className="header-info">{description}.</span></h3>
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
