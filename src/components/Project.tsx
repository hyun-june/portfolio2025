import { useState } from "react";
import ProjectForm from "./ProjectForm";
import { projectList } from "../constants/projectList.js";

const Project = () => {
  const [checkFilter, setCheckFilter] = useState(true);

  const filterList = checkFilter
    ? projectList.filter((item) => item.important)
    : projectList;

  return (
    <div>
      <h1 className="text-8xl ">PROJECT</h1>
      <label htmlFor="important_project" className="text-xl  font-sub">
        중요 프로젝트 보기
      </label>
      <input
        type="checkbox"
        id="important_project"
        className="mt-10"
        checked={checkFilter}
        onClick={() => setCheckFilter((prev) => !prev)}
      />
      <section className="my-10 flex gap-10">
        {filterList.map((item, i) => (
          <ProjectForm item={item} key={i} />
        ))}
      </section>
    </div>
  );
};

export default Project;
