const skillList = {
  frontend: ["React", "Next.js", "Tailwind CSS", "React-native"],
  backend: ["Node.js", "Express.js"],
  database: ["MongoDB", "Mongoose"],
  tools: ["Github", "Figma", "Notion", "Velog"],
};

const skillList1 = {
  frontend: [
    { label: "React", color: "#139fcd" },
    { label: "TypeScript", color: "#2f74c0" },
    { label: "React-native", color: "#087ea4" },
    { label: "Tailwind CSS", color: "#38bdf8" },
    { label: "Next.js", color: "#000" },
  ],
  backend: [
    { label: "Node.js", color: "#417e38" },
    { label: "Express.js", color: "#000" },
  ],
  database: [
    { label: "MongoDB", color: "#008000" },
    { label: "Mongoose", color: "#82b355" },
  ],
  tools: [
    { label: "Github", color: "#1f2328" },
    { label: "Figma", color: "#f54e1c" },
    { label: "Notion", color: "#333" },
    { label: "Velog", color: "#20c997" },
  ],
};

const Skills = () => {
  return (
    <div>
      <h1 className="text-8xl">SKILLS</h1>
      <div className="border p-5 my-6 rounded-lg w-max flex flex-col gap-5  font-sub">
        {Object.entries(skillList1).map(([category, skills]) => (
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
