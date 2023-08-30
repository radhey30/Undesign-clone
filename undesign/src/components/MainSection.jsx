import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CardSection from "./CardSection";
import ResourceSection from "./ResourceSection";

export default function MainSection() {
  return (
    <>
      <Navbar />
      <Header />
      <main>
        <div className="main-title">
          <h2 className="title_blue">Tools & Resources</h2>
          <p className="title_gray">Find the tool you need in each category</p>
        </div>
        <CardSection />
        <hr className="hr" />
        <ResourceSection />
      </main>
      <Footer />
    </>
  );
}
