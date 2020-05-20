import React, { Component } from 'react';
import Pdf from '../pSkolsky-resume-2020.pdf';

class DownloadPDF extends Component {

  render() {

    return (
      <div className = "App">
        <a href = {Pdf} target = "_blank" className="button"><i className="fa fa-download"></i>Download Resume</a>
      </div>
    );
  }
}

export default DownloadPDF;
