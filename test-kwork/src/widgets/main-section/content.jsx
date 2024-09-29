import { useEffect, useState } from "react";
import AnimMainText from "../../components/main-block-txt/component";
import AOS from "aos";
import "aos/dist/aos.css";

const MainSection = () => {
  const [open, set] = useState(true);
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div className="flex items-center justify-between">
        <div
          className="h-[200px] cursor-pointer"
          onClick={() => set((state) => !state)}
        >
          <AnimMainText open={open}>
            <span className="text-[#6B73FF]">
              Быстрая, надежная, качественная ❤️️
            </span>
            <span className="text-white">Студия онлайн разработки 🔥 </span>
            <span className="text-neutral-400">
              Команда с лучшими веб разработчиками в СНГ 🚀
            </span>
          </AnimMainText>
        </div>
        <div data-aos="fade-down-left">
          <img src="/main.png" className="w-[700px] h-[700px] object-cover object-fill" alt="main-img" />
        </div>
      </div>
    </>
  );
};

export default MainSection;
