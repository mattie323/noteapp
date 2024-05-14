import Notes from "../components/Notes";
import HeroSection from "../components/HeroSection";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Notes isHomePage={true}/>
    </>
  );
};

export default HomePage;
