import { skillList } from "../constants/skillList.js";

const Skills = () => {
  return (
    <div className="pl-10">
      <h1 className="text-7xl">SKILLS</h1>
      <div className="border p-5 my-6 rounded-lg w-max flex flex-col gap-5 font-sub bg-white">
        {Object.entries(skillList).map(([category, skills]) => (
          <div className="flex gap-3">
            <div className="font-bold text-black w-20">{category}</div>
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
