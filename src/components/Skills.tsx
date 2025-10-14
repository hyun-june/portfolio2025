import { skillList } from "../constants/skillList.js";
import { FaServer } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { FaTools } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";

const skillIcons: Record<string, React.ReactElement> = {
  frontend: <FaLaptopCode />,
  backend: <FaServer />,
  database: <AiOutlineCloudServer />,
  tools: <FaTools />,
};
const Skills = () => {
  return (
    <div className="pl-10">
      <h1 className="text-5xl">SKILLS</h1>
      <div className="border p-5 my-6 rounded-lg w-max flex flex-col gap-5 font-sub bg-white">
        {Object.entries(skillList).map(([category, skills]) => (
          <div className="flex gap-1">
            <div className="flex items-center gap-2 text-black mr-5 w-25">
              <span className=" text-2xl">{skillIcons[category]}</span>
              <span className="text-lg">{category}</span>
            </div>
            {skills.map((item, i) => (
              <span
                className="mr-1 text-white rounded-md px-2"
                style={{ backgroundColor: item.color }}
                key={i}
              >
                {item.label}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
