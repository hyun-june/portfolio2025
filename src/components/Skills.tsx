const skillList = {
  frontend: ["React", "Next.js", "Tailwind CSS", "React-native"],
  backend: ["Node.js", "Express.js"],
  database: ["MongoDB", "Mongoose"],
  tools: ["Github", "Figma", "Notion", "Velog"],
};

const Skills = () => {
  console.log(Object.entries(skillList));
  return (
    <div>
      <h1 className="text-8xl">SKILLS</h1>
      <div>
        {Object.entries(skillList).map(([category, skill]) => (
          <>
            <div>{category}</div>
            <span>{skill}</span>
          </>
        ))}
      </div>
    </div>
  );
};

export default Skills;
