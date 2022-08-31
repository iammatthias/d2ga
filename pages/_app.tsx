import { AppProps } from "next/app";
import { AudioPlayerProvider } from "react-use-audio-player";
import Layout from "@/components/Layout";
import "@/styles/reset.css";
import data from "@/components/paths.json";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AudioPlayerProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AudioPlayerProvider>
  );
}

export default MyApp;
