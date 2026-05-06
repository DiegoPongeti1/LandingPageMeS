

import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";
import { Parceiros } from "./_components/Parceiros";
import { Infos } from "./_components/Infos";
import { CardsChamativos } from "./_components/CardsChamativos";
import { ShareButton } from "./_components/ShareButton";

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
        <ShareButton />
      </div>
    </main>
  );
}
