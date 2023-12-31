import { BallCanvas } from "./canvas";
import {motion} from 'framer-motion';
import {styles} from '../styles';
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { technologies } from '../constants';


const Tech = () => {
  return (
  <>
    <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technologies I have worked with</p>
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>
      <br/>
    <div className="flex flex-row flex-wrap justify-center gap-10">
    {technologies.map((technology) => (
      <div className="w-28 h-28" key={technology.name}>
        <BallCanvas icon={technology.icon} />
        <p className={"flex justify-center py-2 text-gray-200"}>{technology.name}</p>
      </div>
    ))}
    </div>
  </>
  )
}

export default SectionWrapper(Tech, "")
