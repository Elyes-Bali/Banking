import React from "react";
import Slider from "../slider/Slider";
import "./Home.css";
import About from "../about/About";

import Services from "../services/Services";
import Footer from "../footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/Loader";

const Home = () => {
  const authuser = useSelector((state) => state.user.user);
  const isAdmin = localStorage.getItem("isAdmin");
  const token = localStorage.getItem("token");

  return (
    <>
      {token ? (
        <>
          {authuser ? (
            <>
              <div className="home mdd">
                <section>
                  <div className="div1 row ">
                    <div className="div2 col-md-6 ">
                      <div className="container txte justify-content-center ">
                        <h1 className="lead text-center fs-1 mb-5 text-black ">
                          {" "}
                          STB BANK
                        </h1>
                        <h1 className="serv">
                          <strong>Nous sommes à votre service </strong>
                        </h1>
                      </div>
                    </div>
                    <div className="div3 col-md-6"></div>
                  </div>
                  <div className="container wlc mt-5 mb-6">
                    <h1>Bienvenue à STB BANQUE </h1>
                  </div>
                  <div className="mb-5">
                    <Slider />
                  </div>
                  <div className="mt-5 mb-5">
                    <About id="contact" id1="services" />
                  </div>
                  <div className="mt-5 mb-5">
                    <Services id1="services" />
                  </div>
                  
                </section>
                <Footer />
              </div>
            </>
          ) : (
            <Loader/>
          )}
        </>
      ) : (
        <div className="home mdd">
          <section>
            <div className="div1 row ">
              <div className="div2 col-md-6 ">
                <div className="container txte justify-content-center ">
                  <h1 className="lead text-center fs-1 mb-5 text-black ">
                    {" "}
                    STB BANK
                  </h1>
                  <h1 className="serv">
                    <strong>Nous sommes à votre service </strong>
                  </h1>
                </div>
              </div>
              <div className="div3 col-md-6"></div>
            </div>
            <div className="container wlc mt-5 mb-6">
              <h1>Bienvenue à STB BANQUE </h1>
            </div>
            <div className="mb-5">
              <Slider />
            </div>
            <div className="mt-5 mb-5">
              <About id="contact" id1="services" />
            </div>
            <div className="mt-5 mb-5">
              <Services id1="services" />
            </div>
            
          </section>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Home;
