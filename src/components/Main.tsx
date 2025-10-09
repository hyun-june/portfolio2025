import { useEffect, useState } from "react";
import Profile from "./Profile";

const Main = () => {
  const texts = ["Developer", "Newcomer", "Thinker"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-2 ">
      <section>
        <h1 className="text-8xl">PORTFOLIO</h1>
        <div className="text-3xl flex relative mt-20">
          <p className="border-b-3 pb-2">Creative</p>
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
        {/* <p className="mt-30">
          코드를 작성하고 그 결과물이 즉시 눈에 보이는 것에서 큰 흥미를
          느꼈습니다. <br />
          이를 통해 프론트엔드 개발자로서 더 많은 것을 배우고 성장해 나가고
          싶습니다.
        </p> */}
      </section>
      <section className="grid h-full self-center justify-self-center">
        <div className="relative flex justify-center self-center before:content-[''] before:absolute before:w-[1px] before:h-full before:bg-stone-400 before:left-0 ">
          <Profile src="캐릭터.png" />
        </div>
      </section>
    </div>
  );
};

export default Main;
