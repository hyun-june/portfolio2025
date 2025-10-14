import { IoIosMail } from "react-icons/io";
import { FaCalendar } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

interface ProfileProps {
  name?: string;
  src?: string;
  birth?: string;
  email?: string;
  git?: string;
  velog?: string;
  [key: string]: any;
}

const Profile = ({ profile }: ProfileProps) => {
  const { name, src, birth, email, git, velog } = profile;

  return (
    <div className="w-[300px] h-[500px] p-2 bg-white  shadow-[0px_0px_5px_1px_gray] rounded-[50px] flex flex-col  font-sub mr-20">
      <img
        className="w-full aspect-square rounded-[50px] border border-gray-500"
        src={src}
      />
      <div className="mt-5 p-4 flex-1 flex flex-col justify-between text-xl ">
        <p className="flex gap-1 items-center">
          <IoPersonSharp className="text-black" />
          <span>{name}</span>
        </p>

        <p className="flex gap-1 items-center">
          <FaCalendar className=" text-black" />{" "}
          <span className="text-base">{birth}</span>
        </p>
        <p className="flex gap-1 items-center">
          <IoIosMail className="text-black" />
          <span className="text-base">{email}</span>
        </p>

        <div className="mt-5 flex gap-4">
          <a href={git} target="_black">
            Git
          </a>
          <a href={velog} target="_black">
            Velog
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
