import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) return null;

  return (
    <div>
      <Navbar />
      <main className="flex gap-6 md:gap-20">
        <section className="h-[92vh] overflow-hidden xl:hover:overflow-auto">
          <Sidebar />
        </section>

        <section className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] videos flex-1">
          <Component {...pageProps} />
        </section>
      </main>
    </div>
  );
};

export default MyApp;
