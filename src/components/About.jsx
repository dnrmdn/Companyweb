import { assets } from "../assets/assets";
import {motion} from 'framer-motion'

const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x:200 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity:1, x:0 }}
    viewport={{ once: true }}    
    className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="About">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-4">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">Our Brand</span>
      </h1>
      <div className="flex flex-col items-center text-center gap-4">
      <p className="text-gray-500 max-w-lg text-sm">
          Passionate about properties, Dedicated to your vision.
        </p>
        <p className="text-gray-500 max-w-lg text-sm mb-8">
          Striving to deliver excellence in every project we undertake.
        </p>
        </div>
        <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
          <img src={assets.brand_img} alt="" className="w-full sm:w-1/2 max-w-lg" />
          <div className="flex flex-col items-center md:items-start mt-10 text-gray-500">
            <div className="grid grid-cols-2 gap-6 md:gap-10 w-full">
              <div className="text-center">
                <p className="text-4xl font-medium text-gray-800">10+</p>
                <p>Years of Excellence</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-medium text-gray-800">10+</p>
                <p>Years of Excellence</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-medium text-gray-800">10+</p>
                <p>Years of Excellence</p>
              </div>
              <div className="text-center">
                <p className="text-4xl font-medium text-gray-800">10+</p>
                <p>Years of Excellence</p>
              </div>
              
            </div>
            <p className="my-10 text-center max-w-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, sapiente, perferendis iusto corporis amet doloremque exercitationem quo ad alias laudantium saepe est tempora nemo repellendus soluta obcaecati molestiae voluptates dolor.</p>
            <button className="bg-blue-600 text-white px-8 py-2 rounded">Learn More</button>
          </div>
        </div>
    </motion.div>
  );
};

export default About;
