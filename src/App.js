import React from "react";

import Header from "./Header/Header";
import Services from "./Services/Services";
import FeaturesOne from "./FeaturesOne/FeaturesOne";
import FeaturesTwo from "./FeaturesTwo/FeaturesTwo";
import FeaturesThree from "./FeaturesThree/FeaturesThree";
import FeaturesFour from "./FeaturesFour/FeaturesFour";
import Blog from "./Blog/Blog";
import Video from "./Video/Video";
import Footer from "./Footer/Footer";
import Banner from "./Banner/Banner";

import "./app.css";

const App = () => {
  return (
    <div className="appStyle">
      <Header />
      <FeaturesFour />
      <Video />
      <Banner />
      <Services />
      <FeaturesOne />
      <FeaturesTwo />
      <FeaturesThree />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
