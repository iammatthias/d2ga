import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AudioPlayerProvider } from "react-use-audio-player";

import "@/styles/reset.css";
import Layout from "@/components/Layout";

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
