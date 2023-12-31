import Carousel from "./Carousel";
import SearchField from "./SearchField";

const images = [
  "/images/hero.jpg",
  "/images/Star-wars-logo-new-tall.png",
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
      <main></main>
    </>
  );
};

export default Home;
