import WorkCard from "./WorkCard";

const Work = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full flex justify-center items-center mt-16">
        <div className="flex flex-col justify-center items-center text-white z-[999]">
          <h2 className="text-[1rem] tracking-wide self-start">My developer</h2>
          <h2 className="text-8xl xl:text-[7rem] tracking-wide xl:my-[-10]">
            Work
          </h2>
          <h2 className="text-[1rem] tracking-wide self-end">experience</h2>
        </div>
      </div>

      <div className="max-w-[1360px] mx-auto grid grid-cols-1 xl:grid-cols-2 mt-16">
        <WorkCard
          num="01"
          type="Internship"
          image="/landing_image.jpg"
          alt="image"
          title="Intelliclick"
          desc="jbjdf sjdfns slkdlsd sdjnfsjnsdn djfb djs fbsjdfbskd sdnksjndnc sjdcnsdcs djcnskjdbc "
        />
        <WorkCard
          num="02"
          type="Web App"
          image="/landing_image.jpg"
          alt="image"
          title="Document"
          desc="jbjdf sjdfns slkdlsd sdjnfsjnsdn djfb djs fbsjdfbskd sdnksjndnc sjdcnsdcs djcnskjdbc "
        />
        <WorkCard
          num="03"
          type="Internship"
          image="/landing_image.jpg"
          alt="image"
          title="Intelliclick"
          desc="jbjdf sjdfns slkdlsd sdjnfsjnsdn djfb djs fbsjdfbskd sdnksjndnc sjdcnsdcs djcnskjdbc "
        />
        <WorkCard
          num="04"
          type="Web App"
          image="/landing_image.jpg"
          alt="image"
          title="Document"
          desc="jbjdf sjdfns slkdlsd sdjnfsjnsdn djfb djs fbsjdfbskd sdnksjndnc sjdcnsdcs djcnskjdbc "
        />
        <WorkCard
          num="05"
          type="Internship"
          image="/landing_image.jpg"
          alt="image"
          title="Intelliclick"
          desc="jbjdf sjdfns slkdlsd sdjnfsjnsdn djfb djs fbsjdfbskd sdnksjndnc sjdcnsdcs djcnskjdbc "
        />
        <WorkCard
          num="06"
          type="Web App"
          image="/landing_image.jpg"
          alt="image"
          title="Document"
          desc="jbjdf sjdfns slkdlsd sdjnfsjnsdn djfb djs fbsjdfbskd sdnksjndnc sjdcnsdcs djcnskjdbc "
        />
      </div>
    </div>
  );
};

export default Work;
