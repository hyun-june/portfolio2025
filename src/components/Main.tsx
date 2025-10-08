import Profile from "./Profile";

const Main = () => {
  return (
    <div className="h-full p-[4em] grid grid-cols-2">
      <section className="pl-10">
        <h1 className="text-8xl">PORTFOLIO</h1>
        <p className="mt-30">
          사용자를 생각하는 역지사지 마인드, 포기하지 않고 책임감 있게 일하는
          개발자입니다.
        </p>
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
