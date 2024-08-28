"use client"
import VideoScroll from "@/components/videoScroll";

const LandingPage: React.FC = () => {
  return (
    <div>
      <VideoScroll />
      <section className="h-screen bg-gray-800 text-white flex items-center justify-center">
        <h2 className="text-4xl">Learn More About Our Technology</h2>
      </section>
    </div>
  );
};

export default LandingPage;
