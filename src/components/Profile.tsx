interface ProfileProps {
  src?: string;
  [key: string]: any;
}

const Profile = ({ src, ...props }: ProfileProps) => {
  return (
    <div className="w-[400px] h-[700px] p-2  shadow-[0px_0px_5px_1px_gray] rounded-[50px] ml-30 flex flex-col">
      <img
        className="w-full aspect-square rounded-[50px] border border-gray-500"
        src={src}
      />
      <div className="mt-5 p-4 flex-1 flex flex-col justify-between ">
        <h5 className="text-3xl text-nowrap">
          이현준 <span className="text-xl">LEE HYUNJUN</span>
        </h5>
        <div>
          {/* <p>
            코드를 작성하고 그 결과물이 즉시 눈에 보이는 것에서 큰 흥미를
            느꼈습니다. <br />
            이를 통해 프론트엔드 개발자로서더 많은 것을 배우고 성장해 나가고
            싶습니다.
          </p> */}
          <p>@email</p>
          <p>생년월일</p>
        </div>

        <div className="mt-5 flex gap-4">
          <a href="https://github.com/hyun-june" target="_black">
            Git
          </a>
          <a href="">Velog</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
