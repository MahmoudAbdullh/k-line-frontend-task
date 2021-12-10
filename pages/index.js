import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/hello");
      const json = await res.json();
      console.log("🚀 ~ file: index.js ~ line 9 ~ fetchData ~ json", json);
    };
    fetchData();
  }, []);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Login</h1>
    </div>
  );
}
