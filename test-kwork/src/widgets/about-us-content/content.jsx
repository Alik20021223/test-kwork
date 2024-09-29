import ItemAboutUs from "../../components/item-about-us/component";
import { AboutUsContentData } from "./mock";

const AboutUsContent = () => {
  return (
    <>
      <div id="aboutUs" data-aos="fade-up">
        <h1 className="mb-6">О нас</h1>
        <section className="bg-[#eeecec] rounded-3xl space-y-16 p-12">
          <div className="grid grid-cols-2 gap-6">
            {AboutUsContentData.map((item) => (
              <ItemAboutUs props={item} key={item.id} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutUsContent;
