

import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { Parceiros } from "./_components/Parceiros";
import { Infos } from "./_components/Infos";
import { CardsChamativos } from "./_components/CardsChamativos"

export default function Home() {
  return (
    <main className="bg-red">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="grow">

          <CardsChamativos />

          <Parceiros />
          <Infos />

        </main>
        <Footer />
      </div>
    </main>
  );
}
