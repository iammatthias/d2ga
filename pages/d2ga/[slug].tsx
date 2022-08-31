import { useRouter } from "next/router";
import data from "@/data/data.json";

import D2ga from "@/components/Page/D2ga";
import End from "@/components/Page/End";

export default function D2GA(props: any) {
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];

  const pageData = props.data[+slug - 1];

  const { room, top, left, right, bottom } = pageData;

  return room === 13 ? <End room={room}>room: {room}</End> : <D2ga room={room} top={top} left={left} right={right} bottom={bottom} />;
}

export async function getStaticPaths() {
  const paths = data.map(({ room }) => ({ params: { slug: `${room}` } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  return {
    props: {
      data,
    },
    revalidate: 10,
  };
}
