import { assets, testimonialsData } from "../assets/assets";
import {motion} from "framer-motion"

const Testimonials = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 1.5 }}
    whileInView={{ opacity:1, y:0 }}
    viewport={{ once: true }}
    className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden" id="Testimonials">
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-4">
        Customer <span className="underline underline-offset-4 decoration-1 font-light">Testimonials</span>
      </h1>
      <div className="flex flex-col items-center text-center gap-4">
        <p className="text-gray-500 max-w-lg text-sm mb-8">Real Stories from Those Who Found Home with Us</p>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
  {testimonialsData.map((testimonial, index) => (
    <div
      key={index}
      className="flex-shrink-0 max-w-[340px] border shadow-lg rounded px-8 py-12 text-center"
    >
      <img
        className="w-20 h-20 rounded-full mx-auto mb-4"
        src={testimonial.image}
        alt={testimonial.alt}
      />
      <h2 className="font-semibold text-xl text-gray-700">{testimonial.name}</h2>
      <p className="text-gray-500 mb-4 text-sm">{testimonial.title}</p>
      <div className="flex justify-center gap-1 text-red-500 mb-4">
        {Array.from({length: testimonial.rating}, (item, index)=>(
            <img key={index} src={assets.star_icon} alt="" />
        ))}
      </div>
      <p className="text-gray-600">
        {testimonial.text}
      </p>
    </div>
  ))}
</div>

    </motion.div>
  );
};

export default Testimonials;
