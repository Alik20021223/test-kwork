import "./App.css";
import AboutUsContent from "./widgets/about-us-content/content";
import Header from "./widgets/header/header";
import MainSection from "./widgets/main-section/content";
import TeamSection from "./widgets/team-section/content";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <MainSection />
        <TeamSection />
        <AboutUsContent />
      </div>
    </>
  );
}

export default App;
