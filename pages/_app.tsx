import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AudioPlayerProvider } from "react-use-audio-player";

import "@/styles/reset.css";
import Layout from "@/components/Layout";

import paths from "@/components/paths.json";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];
  const _roomIndex = +slug - 1;
  const _paths = paths[_roomIndex];

  return (
    <AudioPlayerProvider>
      <Layout data={_paths}>
        <Component {...pageProps} />
      </Layout>
    </AudioPlayerProvider>
  );
}

export default MyApp;
