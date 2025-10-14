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
          <p className="text-xl mt-3 flex">
            안녕하세요. 여기다가는 어떤 말들을 적을지 고민중이에요.
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
