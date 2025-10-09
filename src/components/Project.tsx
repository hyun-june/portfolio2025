import { useEffect, useState } from "react";
import ProjectForm from "./ProjectForm";

const projectItem = [
  {
    title: "HealthyLife2024",
    subTitle: "나만의 건강 관리와 SNS 기능을 한 곳에서.",
    skills: [
      "React",
      "React Query",
      "Node.js",
      "Express",
      "Axios",
      "MongoDB",
      "Mongoose",
    ],
    git: "https://github.com/hyun-june/Nodejs-TeamProject2-3",
    site: "https://healthylife-2024.netlify.app/",
    figma:
      "https://www.figma.com/design/f7bTK7dr7UU3Azw6TqEn3R/HealthyLife?t=MsnbD71k0iPJcXgz-0",
    notion:
      "https://daily-creator-da3.notion.site/ebd/13bd357c34288018a2daf447fe2680c2",
    important: true,
  },
  {
    title: "Radion",
    subTitle: "원하는 음악과 추천 음악을 쉽게 즐기세요!",
    skills: [
      "React",
      "React Query",
      "React-oauth/google",
      "Redux",
      "Youtube data api v3",
      "Spotify API",
    ],
    git: "https://github.com/hyun-june/react-study-teamProject-Radion",
    site: "https://react-teamproject-radion.netlify.app/",
    figma:
      "https://www.figma.com/design/1XkwexEXjYZP0XyOWO04Dm/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%8A%A4%ED%84%B0%EB%94%94-2%EA%B8%B0-6%EC%A1%B0?node-id=0-1&t=z0g2EL66gqLERHKi-0",
    notion: "https://hyun-june.github.io/react-study-teamProject-Radion/",
    important: false,
  },
];

const Project = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const [checkFilter, setCheckFilter] = useState(true);

  const filterList = checkFilter
    ? projectItem.filter((item) => item.important)
    : projectItem;

  const tabMenu = ["Tab1", "Tab2"];
  // useEffect(() => {}, [tabIndex]);

  return (
    <div>
      <h1 className="text-8xl">PROJECT</h1>
      <section className="mt-15">
        {tabMenu.map((tab, index) => (
          <button
            key={index}
            onClick={() => setTabIndex(index + 1)}
            className={`cursor-pointer mr-4 ${
              tabIndex === index + 1 ? "font-bold" : "text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </section>
      <label htmlFor="important_project">중요 프로젝트 보기</label>
      <input
        type="checkbox"
        id="important_project"
        checked={checkFilter}
        onClick={() => setCheckFilter((prev) => !prev)}
      />
      <section className="my-10 flex gap-10">
        {tabIndex === 1 &&
          filterList.map((item, i) => <ProjectForm item={item} key={i} />)}
        {tabIndex === 2 && <div>2번탭</div>}
      </section>
    </div>
  );
};

export default Project;
