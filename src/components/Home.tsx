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
      <main>API request to the Star Wars API using People resource</main>
    </>
  );
};

export default Home;
