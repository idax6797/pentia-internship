import InformationCard from "../information-card/information-card";
import "../information/information.scss";

export default function Information() {
  return (
    <section className="information">
      <div className="information__heading">
        <h2>Vi kan hjælpe dig med</h2>
        <h2>digital transformation på to fronter</h2>
      </div>
      <div className="information__content">
        <InformationCard
          imgSrc="../../../src/assets/icon/illustration1.svg"
          imgAlt="Strategisk rådgivning om  digital transformation"
          headline="Strategisk rådgivning om  digital transformation"
          description="Udnytter din virksomhed  sit digitale potentiale?  Hvilke forretningsmuligheder er der, og hvad betyder det på et strategisk plan? "
        />
        <InformationCard
          imgSrc="../../../src/assets/icon/illustration2.svg"
          imgAlt="Eksekvering af  digital transformation"
          headline="Eksekvering af  digital transformation"
          description="I ved, hvad I vil, men I har brug for hjælp til at rulle strategien ud i forhold til organisationen og det digitale fundament bl.a. på Sitecore. Det handler om mennesker og resultater.  "
        />
      </div>
    </section>
  );
}
