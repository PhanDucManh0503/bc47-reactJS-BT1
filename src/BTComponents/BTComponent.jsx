import React from "react";
import Header from "./Header";
import Banner from "./Banner";
import Items from "./Items";
import Footer from "./Footer";

const BTComponent = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <Banner></Banner>

        <section className="pt-4">
          <div className="container px-lg-5">
            <div class="row gx-lg-5">
              <Items></Items>
              <Items></Items>
              <Items></Items>
              <Items></Items>
            </div>
          </div>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BTComponent;
