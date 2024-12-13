import { useState } from "react";
import { assets, projectsData } from "../assets/assets";
import { motion } from "framer-motion";

const Project = () => {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? projectsData.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === projectsData.length - 1 ? 0 : curr + 1));

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1.5 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Project"
    >
      <h1 className="text-2xl sm:text-4xl font-bold text-center mb-4">
        Project{" "}
        <span className="underline underline-offset-4 decoration-1 font-light">
          Completed
        </span>
      </h1>
      <div className="flex flex-col items-center text-center gap-4">
        <p className="text-gray-500 max-w-lg text-sm mb-8">
          Crafting Spaces, Building Legacies—Explore Our Portfolio
        </p>
      </div>

      <div className="flex justify-end items-center mb-8">
        <button
          onClick={prev}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Previous Project"
        >
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button
          onClick={next}
          className="p-3 bg-gray-200 rounded mr-2"
          aria-label="Next Project"
        >
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform gap-8 duration-500 ease-in-out"
          style={{
            transform: `translateX(-${curr * 100}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full sm:w-1/5 group"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto mb-14 transform transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-lg"
              />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span> </span> {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Project;
