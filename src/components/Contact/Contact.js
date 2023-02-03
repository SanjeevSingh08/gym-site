import React from "react";
import Poster from "../Poster/Poster";
import "./Contact.scss"
import whatsapp from "../../assets/whatsapp1.png"
import Instagram from "../../assets/instagram1.png"
import facebook from "../../assets/facebook1.png"
const Contact = () => {
  return (
    <>
 <Poster name="contactus" head="Contact Us" />
 <div className="contact-sec">
   
      <div className="contact-section">
        <div class="contact-wrap w-100 p-md-5 p-4">
          <h3 class="mb-4">Contact Us</h3>
          <div id="form-message-warning" class="mb-4"></div>

          <form
            method="POST"
            id="contactForm"
            name="contactForm"
            class="contactForm"
            novalidate="novalidate"
          >
            <div class="row">
              <div className="col-6">
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="label" htmlfor="name">
                      Full Name
                    </label>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      id="name"
                      placeholder="Name"
                      fdprocessedid="hljtl"
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label class="label" htmlfor="email">
                      Email Address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Email"
                      fdprocessedid="deq1yt"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label class="label" htmlfor="subject">
                    Subject
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    fdprocessedid="weguub"
                  />
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <label class="label" htmlfor="#">
                    Message
                  </label>
                  <textarea
                    name="message"
                    class="form-control"
                    id="message"
                    cols="30"
                    rows="4"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    class="btn btn-primary"
                    fdprocessedid="wfk8mg"
                  />
                  <div class="submitting"></div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="right-c">
        <div className="info">
        <h2 className="title">We are here for help you! To Shape Your Body.</h2>
        <p className="para">
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book.
         
        </p>
       
        <div className="branch helper">
       
          <div className="branch-name">
            <h3>Howrah</h3>
            
            <p>📍<a href=" https://goo.gl/maps/8rEnwBWD1M2hzqig9">35, Dr Abani Dutta Road Howrah-1</a>
          </p>
          
          </div>
          <div className="branch-name helper">
            <h3>Shibpur, Howrah</h3>
           
           <p>📍<a href="https://goo.gl/maps/vxFtKzEvsjMRiA5SA">493, C/A, G.T Road Howrah (Shibpur)</a></p>
          </div>
          </div>
          <div className="timing helper">
            <h3> Staffed Hours </h3>
            
            <p>Mon to Fri: 7:00 am  - 1:00 am<br/>
            Sat to Sun: 7:30 am — 1:00 am</p> 
          </div>
          <div className="information helper">
          <h3>Information</h3>
          
          <p>✆ <a href="tel:+91-9830265429">9830265429</a></p>
          <p>✆ <a href="tel:+91-9830265429">9830371007</a></p>
          <p>✉ vigourthefitnesssstudio@gmail.com</p>
          </div>
          <div className="social helper">
            <h3>Follow us on</h3>
            <a href="https://www.facebook.com/vigourgymhowrah004/"><img src={facebook} alt="" /></a>
      <a href=" https://www.instagram.com/vigourthefitness/?next=%2Fexplore%2Flocations%2F1022282954%2Fvigour-the-fitness-studio%2F"><img src={Instagram} alt="" /></a>
      <img src={whatsapp} alt="" />
     
          </div>
        
      </div>
        
        </div>
      </div>
      <div className="maps">
      <iframe
            className="contact-map" title="mp"
            src=" https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5993154136063!2d88.339989414761!3d22.59408468517178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277e9f32a057b%3A0x60ab311bd23d71d2!2sVigour%20The%20Fitness%20Studio!5e0!3m2!1sen!2sin!4v1674660104894!5m2!1sen!2sin"
          ></iframe>
      </div>
      </div>
     
    </>
  );
};

export default Contact;
