import { useEffect } from "react";
import { mockDataTeam } from "./mock";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card } from "../../components/team-block/Card";

const TeamSection = () => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <>
      <div data-aos="fade-up">
        <section id="team" className="bg-[#eeecec] rounded-3xl space-y-16 p-12">
          <h1 className="text-black">Команда \\\ Dream team</h1>
          <div className="flex items-center space-x-5">
            {mockDataTeam.map((item, i) => (
              <Card data={item} key={i} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamSection;
