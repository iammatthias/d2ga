import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AudioPlayerProvider } from "react-use-audio-player";
import Layout from "@/components/Layout";
import "@/styles/reset.css";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AudioPlayerProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </AudioPlayerProvider>
  );
}

export default MyApp;
