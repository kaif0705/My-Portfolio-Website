import './app.scss'
import { Cursor } from './Components/Cursor/Cursor';
import { Hero } from './Components/Hero/Hero';
import { Navbar } from './Components/Navbar/NAvbar';
import { Parallax } from './Components/Parallax/Parallax';
import Portfolio from './Components/Portfolio/Portfolio';

const App = () => {
  return(
    <>
      <div>
        <Cursor />
        <section id='Homepage'>
          <Navbar />
          <Hero />
        </section>
        <section id='Services'><Parallax type="services"/></section>
        <section>Services</section>
        <section id='Portfolio'><Parallax  type="portfolio"/></section>
        <Portfolio />
        <section id='Contact'>Contact</section>
      </div>
    </>
  );
};

export default App;
