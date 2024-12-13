import Navbar from "./Navbar";
import { motion } from "framer-motion"

const Header = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col w-full overflow-hidden relative"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar />
      <motion.div
      initial={{ opacity: 0, y:100 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity:1, y:0 }}
      viewport={{ once: true }}
  className="absolute inset-0 flex flex-col justify-center items-center text-center text-white opacity-0 animate-fade-up"
>
  <h2 className="text-3xl sm:text-5xl md:text-6xl inline-block max-w-2xl font-bold mb-6">
    Explore home that fit your dreams
  </h2>
  <div className="flex space-x-6">
    <a href="#Project" className="text-lg font-medium hover:underline">
      Projects
    </a>
    <a href="#Contact" className="text-lg font-medium hover:underline">
      Contact Us
    </a>
  </div>
</motion.div>
    </div>
  );
};

export default Header;
