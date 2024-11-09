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
          color="bg-pink-300"
          link="https://www.intelliclick.in/"
          desc="Build and maintained custom server on AWS, RESTful APIs using Node.js and Express and worked on various intricate responsive UI"
        />
        <WorkCard
          num="02"
          type="Web App"
          image="/landing_image.jpg"
          alt="image"
          title="Mind Draft"
          color="bg-green-300"
          link="https://mind-draft.vercel.app/"
          desc="An A.I powered notes and documents management app. Create notes with powerful notion-like editor and upload documents and summarize them through A.I."
        />
        <WorkCard
          num="03"
          type="Internship"
          image="/landing_image.jpg"
          alt="image"
          title="Dev Station"
          color="bg-rose-400"
          link="https://dev-station-inky.vercel.app/"
          desc="Dev Station is a platform to video call, create rooms and share your screen with other developers online to code together."
        />
        <WorkCard
          num="04"
          type="Web App"
          image="/landing_image.jpg"
          alt="image"
          title="Snake Case"
          color="bg-blue-400"
          link="https://sanke-case.vercel.app/"
          desc="An E-commerce shop where you can upload and build custom phone cases of your choice and buy them with stripe payments."
        />
        <WorkCard
          num="05"
          type="Internship"
          image="/landing_image.jpg"
          alt="image"
          title="Taskify"
          color="bg-amber-300"
          link="https://trello-clone-sigma-wine.vercel.app/"
          desc="A full-stack advanced task management app inspired by Trello."
        />
        <WorkCard
          num="06"
          type="Web App"
          image="/landing_image.jpg"
          alt="image"
          title="Document"
          color="bg-fuchsia-400"
          link="https://trello-clone-sigma-wine.vercel.app/"
          desc="jbjdf sjdfns slkdlsd sdjnfsjnsdn djfb djs fbsjdfbskd sdnksjndnc sjdcnsdcs djcnskjdbc "
        />
      </div>
    </div>
  );
};

export default Work;
