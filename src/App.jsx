import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "./style/App.css";

function App() {
  return (
    <>
      <header className="  w-auto h-[100vh]    bg-veryPaleCyan lg:h-[72vh]  xl:max-w-[1440px] md:h-[150vh] mx-auto">
        <Navbar />
        <Hero />
      </header>
      <main className="xl:w-[1440px] h-auto mx-auto md:mt-[140px]">
        <Cards />
      </main>
      <footer className=" lg:mt-[340px] mt-[200px] xl:w-[1440px] mx-auto  bg-veryDarkCyan">
        <Footer />
      </footer>
    </>
  );
}

export default App;
