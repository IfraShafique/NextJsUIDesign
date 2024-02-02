import Image from "next/image";
import '@fontsource/bebas-neue';
import Header from '@/components/ui/header'
import Title from '@/components/ui/title'
import Button from "@/components/ui/Button";
import Content from "@/components/ui/content";
import HowItWorks from "@/components/ui/howItWorks";
import Testimonials from "@/components/ui/Testimonials";
import '../app/globals.css'
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <div className=" w-[100%] h-[100%] bg-gradient-to-b from-[#06234B] to-[#1a3bc0] via-[#162A81] text-white">

        <div>
          <Header />

          <Title />

          <Content />

          <HowItWorks />
          <Testimonials/>

          <Footer/>

        </div>



        {/* content */}




      </div>
    </>
  );
}
