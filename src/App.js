import "./App.css";
import About from "./Component/About";
import Footer from "./Component/Footer";
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Service from "./Component/Services";
import Tour from "./Component/Tours";

function App() {
  console.log("hello world");
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Service/>
      <Tour/>
      <Footer/>
    </>
  );
}

export default App;
