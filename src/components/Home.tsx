import { useEffect, useState } from "react";
import { IoIosMail } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const Home = () => {
  const texts = ["Developer", "Newcomer", "Thinker"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid border-r-2 border-gray-200">
      <section>
        <h1 className="text-6xl">ABOUT ME</h1>
        <div className="text-2xl flex relative mt-5 flex-col gap-3 font-sub text-[var(--text-gray)]">
          {/* <p className="border-b-3 pb-2">Creative</p>
          {texts.map((text, i) => (
            <p
              key={i}
              className={`absolute left-[4em] font-bold opacity-0 transition-all duration-1000 origin-bottom ${
                i === index
                  ? "opacity-100 visible [transform:rotateX(0deg)]"
                  : "invisible opacity-0 [transform:rotateX(-180deg)]"
              }`}
            >
              {text}
            </p>
          ))} */}

          <p className="flex gap-1 items-center">
            <IoPersonSharp className="text-2xl text-black" />
            이현준 <span className="text-xl self-end">LEE HYUNJUN</span>
          </p>

          <p className="flex gap-1 items-center">
            <FaCalendar className="text-2xl text-black" /> <span>98.12.18</span>
          </p>
          <p className="flex gap-1 items-center">
            <IoIosMail className="text-2xl text-black" />
            <span>leehyunjune11@naver.com</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
