import About from "@/components/About";
import Footer from "@/components/Footer";
import LandingContent from "@/components/LandingContent";
import Work from "@/components/Work";
import { ReactLenis } from "lenis/react";

export default function Home() {
  return (
    <div style={{ isolation: "isolate" }} className="relative h-screen">
      <ReactLenis root>
        <div
          className="w-full flex flex-col bg-black"
          // style={{
          //   background:
          //     "linear-gradient(180deg, rgba(52,131,203,1), rgba(0,0,0,0)), linear-gradient(0deg, rgba(86,83,98,1), rgba(255,0,0,0)), url(/noise.svg)",
          //   filter: "contrast(500%) brightness(100%)",
          // }}
        >
          <LandingContent />
        </div>
        <div className="w-full bg-black min-h-screen relative">
          <About />
          <Work />
        </div>
        <Footer />
      </ReactLenis>
    </div>
  );
}
