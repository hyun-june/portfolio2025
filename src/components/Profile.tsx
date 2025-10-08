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
        <h5 className="text-4xl">name</h5>
        <div>여기는 어떤 내용을 넣지</div>

        <div className="mt-5 flex gap-4">
          <a href="">Git</a>
          <a href="">Notion</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
