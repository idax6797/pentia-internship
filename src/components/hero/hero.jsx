import "../hero/hero.scss";

export default function Hero() {
  const dotSize = [2, 4, 6];
  const dots = [];

  for (let i = 0; i < dotSize.length; i++) {
    dots.push(
      <div
        key={i}
        className="hero__scroll-dot"
        style={{ width: dotSize[i], height: dotSize[i] }}
      ></div>
    );
  }

  return (
    <section className="hero">
      <p className="hero__head-text">Lorem Ipsum</p>
      <div className="hero__content">
        <img src="src/assets/icon/zeppeliner.svg" alt="Airship" />
        <h1>Digital transformation</h1>
        <h3>Rådgivning, Implementering, Resultater</h3>
        <div className="hero__content-description">
          <p>Hvordan bliver din virksomhed en digital vinder i fremtiden?</p>
          <p>
            Hvilke tiltag skal der til strategisk og taktisk for at dreje
            forretningen i den rigtige retning? Hvilke elementer indeholder en
            succesfuld digital transformation? Vi har svarene. Pentia kan hjælpe
            dig på hele rejsen fra strategisk rådgivning til implementering.
          </p>
        </div>
      </div>
      <div className="hero__scroll">
        <span>Start din rejse her</span>
        <div className="hero__scroll-dots">{dots}</div>
      </div>
    </section>
  );
}
