import { useState } from "react";

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
    date?: string;
    team?: boolean;
    role?: string[];
  };
}

const ProjectForm = ({ item }: ProjectFormProps) => {
  const { title, subTitle, skills, important, notion, date, team, role, site } =
    item;
  const [isOpen, setIsOpen] = useState(false);
  const [isIframeLoading, setIsIframeLoading] = useState(true);

  return (
    <div className="border shadow-sm p-5 rounded-md flex flex-col font-sub bg-white">
      <div className="border-b-1 border-gray-400">
        <h4
          className={`${
            important ? "bg-[var(--bg-red)]" : "bg-gray-400"
          } w-max text-xl py-0.5 px-3 rounded-md text-white`}
        >
          {title}
        </h4>
        <p className="text-[var(--text-gray)] my-1 flex gap-1">
          <span>{date}</span>
          <span> ({team === true ? "팀 프로젝트" : "개인 프로젝트"})</span>
        </p>
      </div>
      <div className="flex flex-col flex-1 justify-between py-3 gap-4">
        <h5 className="text-md">{subTitle}</h5>
        <ul className="list-disc pl-4">
          {role?.map((list, i) => (
            <li key={i}>{list}</li>
          ))}
        </ul>
        <div className="border border-[#f9c51d] bg-[#f9c51d33] rounded-md p-1 flex gap-3 flex-wrap">
          {skills?.map((skill, i) => (
            <span key={i} className=" text-nowrap">
              {skill}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          {notion ? (
            <button
              className="border border-gray-400 rounded-md py-0.5 px-2 w-max cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              README
            </button>
          ) : null}
          {site ? (
            <a
              target="_blank"
              href={site}
              className="border border-gray-400 rounded-md py-0.5 px-2 w-max cursor-pointer"
            >
              이동하기
            </a>
          ) : null}
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-[998]"
            onClick={() => setIsOpen(false)}
          >
            <div className="fixed z-[999] w-[1000px] bg-white shadow-lg rounded-md p-3">
              <button
                onClick={() => setIsOpen(false)}
                className="text-black text-2xl"
              >
                X
              </button>
              <iframe
                src={notion}
                width="100%"
                height="800"
                onLoad={() => setIsIframeLoading(false)}
              />

              {isIframeLoading && (
                <div className="flex justify-center items-center">
                  로딩중...
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectForm;
