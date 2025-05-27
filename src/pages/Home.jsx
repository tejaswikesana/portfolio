import Hero from '../components/home/Hero';
import Overview from '../components/home/Overview';
import FeaturedProjects from '../components/home/FeaturedProjects';
import ContactCTA from '../components/home/ContactCTA';

const Home = () => {
  return (
    <>
      <Hero />
      <Overview />
      <FeaturedProjects />
      <ContactCTA />
    </>
  );
};

export default Home;