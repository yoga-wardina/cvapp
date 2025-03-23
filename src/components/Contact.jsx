import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const startH = "&lt;h1&gt;";
  const endH = "&lt;/h1&gt;";
  return (
    <div className="contact  ">
      <section id="contact" className="testing pb-32">
        <div className="headings">
          <div
            className="size30 fancyFont color-gray"
            dangerouslySetInnerHTML={{ __html: startH }}
          ></div>
          <h1 className="size80">
            <span className="shadow color-cyan">C</span>
            <b className="bounce"> o </b>
            <b className="bounce"> n </b>
            <b className="bounce"> t </b>
            <b className="bounce"> a </b>
            <b className="bounce"> c </b>
            <b className="bounce"> t </b> &nbsp;
            <b className="bounce"> M </b>
            <b className="bounce"> e </b>
          </h1>
          <div
            className="size30 fancyFont color-gray"
            dangerouslySetInnerHTML={{ __html: endH }}
          ></div>
        </div>
        <div className="skill-grid mt-32">
          <div className="left-content">
            <div className="blank text-2xl ">
              <i class="bi bi-envelope shadow color-cyan"></i>{" "}
              <span>Email</span>
              <br />
              <span className="text-xl color-cyan">yogafx25@gmail.com</span>
            </div>
            <div className="blank text-2xl">
              <i class="bi bi-telephone shadow color-cyan"></i>{" "}
              <span>Phone</span>
              <br />
              <span className="text-xl color-cyan">+62 8134-4454-4799</span>
            </div>
            <div className="blank text-2xl">
              <i class="bi bi-geo-alt shadow color-cyan"></i>{" "}
              <span>Visit Me</span>
              <br />
              <span className="text-xl color-cyan">Yogyakarta, Indonesia</span>
            </div>
          </div>
          <div className="right-content">
            <form action="">
              <div className="grid">
                <input
                  className="w-full mb-5 p-1 text-center rounded-sm text-slate-950 focu:border-0"
                  type="text"
                  name=""
                  id=""
                  placeholder="Your Name"
                />
                <input
                  className=" w-full mb-5 p-1 text-center rounded-sm text-slate-950"
                  type="text"
                  name=""
                  id=""
                  placeholder="Email"
                />
              </div>
              <input
                className=" w-full mb-5 p-1 text-center rounded-sm text-slate-950"
                type="text"
                name=""
                id=""
                placeholder="Subject"
              />
              <br />
              <textarea
                className=" w-full mb-5 p-1 rounded-sm text-slate-950"
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <br />
              <button className="cta">SUBMIT</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Contact;
