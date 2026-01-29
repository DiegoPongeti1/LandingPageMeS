import { Header } from "./_components/Header";
import { Body } from "./_components/Body";
import { Footer } from "./_components/Footer";
import { Parceiros } from "./_components/Parceiros";
  
export default function Home() {
  return (
    <>
      <div className="bg-[#FDF6ec] w-full h-full">
        <Header />
        <Body />
        <Parceiros />
        <Footer />  
      </div>
    </>
  );
}
