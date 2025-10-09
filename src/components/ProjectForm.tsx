interface ProjectFormProps {
  item: {
    title?: string;
    subTitle?: string;
    skills?: string[];
    git?: string;
    site?: string;
    figma?: string;
    notion?: string;
    important?: boolean;
  };
}

const ProjectForm = ({ item }: ProjectFormProps) => {
  const { title, subTitle, skills, important } = item;

  return (
    <div className=" w-[350px] h-[350px] border shadow-sm p-2 rounded-md flex flex-col">
      <div className="border-b-1 border-gray-400">
        <h4
          className={`${
            important ? "bg-[var(--bg-red)]" : "bg-gray-400"
          } w-max text-xl py-0.5 px-3 rounded-md text-white`}
        >
          {title}
        </h4>
        <p className="text-[var(--text-gray)] my-1">2020.00</p>
      </div>
      <div className="flex flex-col flex-1 justify-between py-3">
        <h5 className="text-md">{subTitle}</h5>
        <ul className="list-disc pl-4">
          <li>1번 뭐시기</li>
          <li>2번 뭐시기</li>
        </ul>
        <div className="border border-[#f9c51d] bg-[#f9c51d33] rounded-md p-1 flex gap-3 flex-wrap">
          {skills?.map((skill, i) => (
            <span key={i} className=" text-nowrap">
              {skill}
            </span>
          ))}
        </div>
        <span className="border border-gray-400 rounded-md py-0.5 px-2 w-max">
          README
        </span>
      </div>
    </div>
  );
};

export default ProjectForm;
