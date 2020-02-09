import React from "react";
import {Link} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './index.css';
import $ from 'jQuery';
library.add(faBars);

function Navbar() {
  function showHideNavBar() {
     var slider =document.getElementById('menu-toggle');
     if (slider) {
      slider.checked = false;
     }
    
    // var $slider = $('.mydiv');
    // $slider.animate({
    //   left: parseInt($slider.css('left'),10) == -200 ?
    //   0 : -200
    // });
  }

  function navClick(e) {
   showHideNavBar();
  }

  function closeNavBar(e) {
    showHideNavBar();
    
  }

  return (
    <div>
        <div className="navbar navbar-default" role="navigation">
            <label className="headerText">Verko</label>
        </div>
        <div className="fa-bars-size hamburger-btn" >
        
          <input type="checkbox" id="menu-toggle" />
          <label for="menu-toggle" className="menu-icon">
            <i class="fa fa-bars"></i>
          </label>

          {/* <div class='mydiv'> */}
          <div class="slideout-sidebar">

            <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/enrollmentUpload" onClick={closeNavBar}>EnrollmentUpload</Link></li>
            <li><Link to="/paymentUpload" onClick={closeNavBar}>PaymentUpload</Link></li>
            <li><Link to="/planSetup" onClick={closeNavBar}>Plan Setup</Link></li>
            
            </ul>
        </div>
      </div>
       
      
   </div>

  );
};
export default Navbar;