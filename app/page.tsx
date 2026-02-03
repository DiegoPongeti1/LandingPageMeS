import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { Parceiros } from "./_components/Parceiros";
import { Infos } from "./_components/Infos";
import {CardsChamativos} from "./_components/CardsChamativos"
  
export default function Home() {
  return (
    <>
      <div className="bg-[#ffffff] min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <CardsChamativos />

          <Parceiros />
          <Infos />
          
        </main>
        <Footer />  
      </div>
    </>
  );
}
