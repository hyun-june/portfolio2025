import { IoIosMail } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

const Home = () => {
  return (
    <div className="grid border-r-2 border-gray-200">
      <section>
        <h1 className="text-6xl">ABOUT ME</h1>
        <div className="text-2xl flex mt-5 flex-col gap-3 font-sub text-[var(--text-gray)]">
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
