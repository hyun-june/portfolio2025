import { useEffect, useState } from "react";
interface ProfileProps {
  src?: string;
  [key: string]: any;
}

const Profile = ({ src }: ProfileProps) => {
  const texts = ["Developer", "Newcomer", "Thinker"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-[300px] h-[500px] p-2 bg-white  shadow-[0px_0px_5px_1px_gray] rounded-[50px] flex flex-col  font-sub mr-20">
      <img
        className="w-full aspect-square rounded-[50px] border border-gray-500"
        src={src}
      />
      <div className="mt-5 p-4 flex-1 flex flex-col justify-between ">
        <div className="text-2xl flex relative flex-col gap-3">
          <p className="border-b-3 pb-2 w-max">Creative</p>
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
          ))}
        </div>
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
