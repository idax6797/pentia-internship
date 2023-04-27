import "./App.scss";
import Navigation from "./components/navigation/navigation";
import Hero from "./components/hero/hero";

export default function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <Hero />
      </main>
    </>
  );
}
