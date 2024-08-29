import React, {useState} from "react";
import './style.css';
// Layout components
import Header from "./components/Layout components/Header";
import SocialIcons from "./components/Layout components/SocialIcons";
import Footer from "./components/Layout components/Footer";
// Main components
import Home from "./components/main components/Home";
import Features from "./components/main components/Features";
import About from "./components/main components/About";
import Benefits from "./components/main components/Benefits";
import Faqs from "./components/main components/Faqs";
import Difference from "./components/main components/Difference";
import ContactForm from "./components/main components/ContactForm";
import Loader from "./components/main components/Loader";
// Secondary Components
import SecondaryBanner from "./components/secondary components/SecondaryBanner";
import Banner from "./components/secondary components/Banner";
import Apply from "./components/main components/Apply";
// import Clients from "./components/Clients";
// import FeaturesScroll from "./components/FeaturesScroll";
// import Review from "./components/Review";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  console.log(isLoaded);
  const [time2sec, settime2sec] = useState(false);
  setTimeout(() => {
    settime2sec(true);
    if (setIsLoaded) {
      setIsLoading(false);
    }
  }, 1500);
  // Pre Loader
  window.addEventListener("load", function () {
    if(time2sec){
      setIsLoading(false);
    }else{
      setIsLoaded(true);
    }
  });
  return (
    (isLoading) ? <Loader/> :
    <>
      <Header />
      <SocialIcons/>
      <Home/>
      <SecondaryBanner 
        banner_background={"#181722"}
        banner_title={"WHAT WE BELIEVE IN"}
        banner_paragraph={"Through years of experience as an OnlyFans Agency, we know exactly how we can fully fulfill your potential and conquer the world of men for you."}
      />
      <Features/>
      <About/>
      <SecondaryBanner 
        banner_background={"#000"}
        banner_title={"WHAT ARE YOU WAITING FOR?"}
        banner_paragraph={"Start with us now. The succes of your OnlyFans account is waiting for you. Contact with us now and we will start managing your account"}
        />
      <Benefits/>
      <Banner/>
      <Faqs/>
      <Difference/>
      <Apply/>
      <ContactForm/>
      <Footer/>
      {/* <Review/> */}
      {/* <FeaturesScroll/> */}
      {/* <Clients/> */}
    </>
  );
}

export default App;
