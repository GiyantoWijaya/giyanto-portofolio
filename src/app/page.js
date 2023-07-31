import AboutMe from "@/components/aboutme/aboutMe";
import Header from "@/components/header/header";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <Navbar />
        <div className="grid justify-items-center grid-cols-6">
          <div className="col-span-6">
            <Header />
          </div>
          <div className="col-end-6 col-span-4 md:col-span-4 md:col-end-6 sm:col-span-4 sm:col-end-6 mt-10">
            <AboutMe />
          </div>
        </div>
      </div>
    </main>
  );
}
