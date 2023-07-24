import Header from "@/components/header/header";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <Navbar />
        <div className="container mx-auto">
          <Header />
        </div>
      </div>
    </main>
  );
}
