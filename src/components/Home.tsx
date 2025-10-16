import { profileList } from "../constants/profileList";
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
// import { RiNotionFill } from "react-icons/ri";

const Home = () => {
  const { git, velog, figma } = profileList;
  return (
    <div className="grid border-r-2 border-gray-200">
      <section className="flex flex-col justify-between">
        <h1 className="text-5xl">ABOUT ME</h1>

        <div className="h-full flex flex-col justify-between py-3">
          <p className="text-lg mt-3 flex font-sub">
            안녕하세요. <br />
            배움을 나누며 함께 성장하는 것을 좋아합니다.
            <br />팀 프로젝트에 참여하며 서로의 지식을 공유하고, <br />
            함께 성장하는 과정을 소중히 생각합니다.
          </p>

          <div className="mt-5 flex gap-4 text-3xl">
            <a href={git} target="_black">
              <FaGithub />
            </a>
            <a href={velog} target="_black">
              <SiVelog />
            </a>
            <a href={figma} target="_black">
              <FaFigma />
            </a>
            {/* <a href={figma} target="_black">
              <RiNotionFill />
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
