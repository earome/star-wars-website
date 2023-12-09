import { useState } from "react";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps {
  images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const goToPrev = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-full">
      <AnimatePresence mode="wait">
        <motion.div
          className="overflow-hidden h-full"
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={images[currentImage]}
            alt={`Image ${currentImage + 1}`}
            className="w-full"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </motion.div>
      </AnimatePresence>
      <button
        onClick={goToPrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2"
      >
        <IoIosArrowBack size={40} color="blue" />
      </button>
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-9 transform -translate-y-1/2"
      >
        <IoIosArrowForward size={40} color="blue" />
      </button>
    </div>
  );
};

export default Carousel;
