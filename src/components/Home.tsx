import { IoIosMail } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { profileList } from "../constants/ProfileList";

const Home = () => {
  const { git, velog } = profileList;
  return (
    <div className="grid border-r-2 border-gray-200">
      <section className="flex flex-col justify-between">
        <h1 className="text-6xl">ABOUT ME</h1>

        <div className="h-full flex flex-col justify-between py-3">
          <p>"안녕하세요. 여기다가는 어떤 말들을 적을지 고민중이에요. "</p>
          <div className="mt-5 flex gap-4">
            <a href={git} target="_black">
              Git
            </a>
            <a href={velog} target="_black">
              Velog
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
