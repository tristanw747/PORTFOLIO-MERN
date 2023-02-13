import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};




const Description = ({ title }) => {

      switch(title){
      case "Project 1": return "A React dashboard app built using Material UI, Nivo Charts, Formik, Yup, FullCalendar, and Data Grid"
      case "Project 2": return "A React Fitness website built using Vite, Tailwind, Hero Icons, Framer Motion, Form Submit, React Anchor Link Smooth Scroll"
      case "Project 3": return "MERN Dashboard using Material UI, Material UI Data Grid, Nivo Charts, Redux Toolkit. Backend using Express Js, and MongoDB"
      case "Project 4": return "Minimalist web scraper for stock data across 30+ websites using Node JS, Express Js and Puppeteer";
      default: return "not found"
    }

  
}




const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">
        <Description title={ title }/>
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Here are a few sample projects, demonstrating front and back end development
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}

          <Project title="Project 1" />

          <Project title="Project 2" />


          {/* ROW 2 */}
          <Project title="Project 3" />
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            RESPONSIVE WEB DESIGN
          </div>
          <Project title="Project 4" />
          <div
            className="flex justify-center text-center items-center p-10 bg-yellow
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            INTUITIVE USER INTERFACES
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
