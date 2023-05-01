import "./App.scss";
import Navigation from "./components/navigation/navigation";
import Hero from "./components/hero/hero";
import Information from "./components/Information/information";
import Contact from "./components/contact/contact";

export default function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
        <Information />
        <Contact />
      </main>
    </>
  );
}
