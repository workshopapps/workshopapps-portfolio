import Head from "next/head";
import Homepage from "../components/homepage/Homepage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Workshop Apps | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Homepage />
    </div>
  );
}
