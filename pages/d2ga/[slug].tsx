import { useRouter } from "next/router";
import { item, item1a, item1b, item1c, item2a, item2b, item2c, item3a, item3b, item3c } from "@/styles/page.css";
import Midi from "@/components/Midi";
import Doorway from "@/components/Doorway";
import data from "@/components/paths.json";

type DataProps = {
  room: number;
  top: number;
  right: number;
  bottom: number;
  left: number;
};

export default function D2GA() {
  const router = useRouter();
  const slug = (router.query.slug as string[]) || [];
  const _roomIndex = +slug - 1;
  const _data = data[_roomIndex];

  return (
    <>
      <div className={`${item} ${item1a}`}>
        <Midi />
        <Midi exit />
      </div>
      <div
        className={`${item} ${item1b}`}
        onClick={() => {
          router.replace({
            pathname: "/d2ga/[slug]",
            query: { slug: _data.top },
          });
        }}>
        <Doorway />
      </div>
      <div className={`${item} ${item1c}`} />
      <div
        className={`${item} ${item2a}`}
        onClick={() => {
          router.replace({
            pathname: "/d2ga/[slug]",
            query: { slug: _data.left },
          });
        }}>
        <Doorway />
      </div>
      <div className={`${item} ${item2b}`}>Room: {_data && _data.room}</div>
      <div
        className={`${item} ${item2c}`}
        onClick={() => {
          router.replace({
            pathname: "/d2ga/[slug]",
            query: { slug: _data.right },
          });
        }}>
        <Doorway />
      </div>
      <div className={`${item} ${item3a}`} />
      <div
        className={`${item} ${item3b}`}
        onClick={() => {
          router.replace({
            pathname: "/d2ga/[slug]",
            query: { slug: _data.bottom },
          });
        }}>
        <Doorway />
      </div>
      <div className={`${item} ${item3c}`} />
    </>
  );
}
