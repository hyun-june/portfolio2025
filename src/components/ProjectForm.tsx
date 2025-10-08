const ProjectForm = () => {
  return (
    <div className="shadow-[0_0_10px_1px_gray] w-[300px] h-[300px] p-2 rounded-md">
      <div className="border-b-1 border-gray-400 ">
        <h4 className="bg-[var(--bg-red)] w-max text-2xl py-0.5 px-3 rounded-md text-white">
          title
        </h4>
        <p className="text-[var(--text-gray)] my-1">2020.00</p>
      </div>
      <div className="flex flex-col gap-3">
        <h5 className="text-xl">sub title</h5>
        <ul className="list-disc pl-4">
          <li>1번 뭐시기</li>
          <li>2번 뭐시기</li>
        </ul>
        <div className="border border-[#f9c51d] bg-[#f9c51d33] rounded-md p-1">
          skills
        </div>
        <span className="border border-gray-400 rounded-md py-0.5 px-2 w-max">
          README
        </span>
      </div>
    </div>
  );
};

export default ProjectForm;
