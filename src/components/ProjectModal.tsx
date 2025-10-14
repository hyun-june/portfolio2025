import { useState } from "react";

interface ProjectModalProps {
  setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  img?: string[];
}

const ProjectModal = ({ setModalIsOpen, img }: ProjectModalProps) => {
  const [tabIndex, setTabIndex] = useState<number>(1);
  if (!img) {
    return <div className="text-black">이미지를 불러오는 중...</div>;
  }

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-[998]"
      onClick={() => setModalIsOpen(false)}
    >
      <div
        className="fixed z-[999] w-[420px] h-[550px] bg-white shadow-lg rounded-md p-3 flex flex-col items-center gap-3 p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border w-full h-full">
          {img && (
            <img
              src={img[tabIndex - 1]}
              alt=""
              className="w-[400px] h-[450px] object-contain"
            />
          )}
        </div>
        <div>
          <button
            onClick={() => setTabIndex((prev) => (prev > 1 ? prev - 1 : prev))}
            className="cursor-pointer"
          >
            {"<"}
          </button>
          <span>{`${tabIndex}/${img?.length}`}</span>
          <button
            onClick={() =>
              setTabIndex((prev) => (prev < img.length ? prev + 1 : prev))
            }
            className="cursor-pointer"
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
