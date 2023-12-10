import Carousel from "./Carousel";
import SearchField from "./SearchField";

const images = [
  "/images/Star-wars-logo-new-tall.png",
  "/images/hero.jpg",
  "/images/image.jpeg",
];

const Home = () => {
  return (
    <>
      <header className="relative overflow-y-hidden min-h-[500px] w-screen">
        <div className="absolute top-0 left-0 right-0 h-full ">
          <Carousel images={images} />
        </div>
      </header>
      <main>
        <div className="h-full flex items-center justify-center">
          API request to the Star Wars API using People resource. The Star Wars
          API is the world's first quantified and programmatically-formatted set
          of Star Wars data. After hours of watching films and trawling through
          content online, we present to you all the People from Star Wars. We've
          formatted this data in JSON and exposed it to you in a RESTish
          implementation that allows you to programmatically collect and measure
          the data.
        </div>
      </main>
    </>
  );
};

export default Home;
