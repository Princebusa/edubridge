import { useState } from "react";
import "./footer.css"
import logo from "../assets/logo.png";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaInternetExplorer } from "react-icons/fa";

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <img className="pb-2" src={logo} alt="" />
            <p className="text-justify footer-des">EduBridge, under the Commissionerate of Technical Education, is a pioneering platform designed to simplify and streamline the college transfer process for students. Our goal is to provide a seamless, transparent, and efficient system that ensures students can transfer between colleges with ease.</p>
          </div>
  
          {/* <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">C</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">UI Design</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">PHP</a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Java</a></li>
              <li><a href="http://scanfcode.com/category/android/">Android</a></li>
              <li><a href="http://scanfcode.com/category/templates/">Templates</a></li>
            </ul>
          </div>
   */}
          <div className="col-xs-6 col-md-3 mt-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">About Us</a></li>
              <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Contribute</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="">
            <p className="copyright-text text-center">Copyright &copy; 2025 All Rights Reserved by 
         EduBridge.
            </p>
          </div>
  
         
        </div>
      </div>
  </footer>
  )
}

