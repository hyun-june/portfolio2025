import { IoIosMail } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

interface ProfileProps {
  src?: string;
  [key: string]: any;
}

const Profile = ({ src }: ProfileProps) => {
  return (
    <div className="w-[300px] h-[500px] p-2 bg-white  shadow-[0px_0px_5px_1px_gray] rounded-[50px] flex flex-col  font-sub mr-20">
      <img
        className="w-full aspect-square rounded-[50px] border border-gray-500"
        src={src}
      />
      <div className="mt-5 p-4 flex-1 flex flex-col justify-between text-xl ">
        <p className="flex gap-1 items-center">
          <IoPersonSharp className="text-black" />
          이현준 <span className="text-lg self-end">LEE HYUNJUN</span>
        </p>

        <p className="flex gap-1 items-center">
          <FaCalendar className=" text-black" />{" "}
          <span className="text-base">98.12.18</span>
        </p>
        <p className="flex gap-1 items-center">
          <IoIosMail className="text-black" />
          <span className="text-base">leehyunjune11@naver.com</span>
        </p>

        <div className="mt-5 flex gap-4">
          <a href="https://github.com/hyun-june" target="_black">
            Git
          </a>
          <a href="https://velog.io/@hyun_jun/posts" target="_black">
            Velog
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
