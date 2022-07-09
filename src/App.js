import "./App.css";
import { Header } from "./components/header";
import { Section } from "./components/section";
import { CardGalery } from "./components/cardGalery";
import galery1 from "./assets/img/galery1.jpg";
import galery2 from "./assets/img/galery2.jpg";
import galery3 from "./assets/img/galery3.jpg";
import galery4 from "./assets/img/galery4.jpeg";
import { NavigationCourse } from "./components/navigationCourse";
import { SectionThree } from "./components/sectionThree";

function App() {
  return (
    <div className="body">
      <Header />
      <Section />
      <div className="section-card-two">
        <h2 className="title-section-card">
          Unlimited access to 100+ instructors
        </h2>
        <NavigationCourse />
      </div>
      <div className="container-card">
        <CardGalery
          image={galery1}
          height={253}
          title="Sales Marketing"
          information="4 month"
        />
        <CardGalery
          image={galery2}
          height={290}
          title="Data analytics"
          information="3 month"
        />
        <CardGalery
          image={galery3}
          height={350}
          title="Copywriting Pro"
          information="2 month"
        />
        <CardGalery
          image={galery4}
          height={253}
          title="Design art"
          information="4 month"
        />
      </div>
      <SectionThree />
    </div>
  );
}

export default App;
