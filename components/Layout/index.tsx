import React from "react";
import { useRouter } from "next/router";
import Midi from "../Midi";

import { layout, layoutItem, layoutItem1a, layoutItem1b, layoutItem1c, layoutItem2a, layoutItem2b, layoutItem2c, layoutItem3a, layoutItem3b, layoutItem3c } from "./Layout.css";
import Doorway from "../Doorway";

type Props = {
  children?: React.ReactNode;
  data?: Object;
};

type DataProps = {
  room: number;
  top: number;
  right: number;
  bottom: number;
  left: number;
};

function HomeLayout() {
  return (
    <main className={layoutItem}>
      <Midi />
    </main>
  );
}

function D2gaLayout({ data }: Props) {
  const router = useRouter();
  const _data = data as DataProps;

  return (
    <main className={layout}>
      <div className={`${layoutItem} ${layoutItem1a}`}>
        <Midi />
      </div>
      <div
        className={`${layoutItem} ${layoutItem1b}`}
        onClick={() => {
          router.replace({
            pathname: "/d2ga/[slug]",
            query: { slug: _data.top },
          });
        }}>
        <Doorway />
      </div>
      <div className={`${layoutItem} ${layoutItem1c}`} />
      <div
        className={`${layoutItem} ${layoutItem2a}`}
        onClick={() => {
          router.replace({
            pathname: "/d2ga/[slug]",
            query: { slug: _data.left },
          });
        }}>
        <Doorway />
      </div>
      <div className={`${layoutItem} ${layoutItem2b}`}>Room: {_data && _data.room}</div>
      <div
        className={`${layoutItem} ${layoutItem2c}`}
        onClick={() => {
          router.replace({
            pathname: "/d2ga/[slug]",
            query: { slug: _data.right },
          });
        }}>
        <Doorway />
      </div>
      <div className={`${layoutItem} ${layoutItem3a}`} />
      <div
        className={`${layoutItem} ${layoutItem3b}`}
        onClick={() => {
          router.replace({
            pathname: "/d2ga/[slug]",
            query: { slug: _data.bottom },
          });
        }}>
        <Doorway />
      </div>
      <div className={`${layoutItem} ${layoutItem3c}`} />
    </main>
  );
}

function GeneralLayout({ children }: Props) {
  return <main className={layoutItem}>{children}</main>;
}

export default function Layout({ children, data }: Props) {
  const pathname = useRouter().pathname;

  if (pathname === "/") {
    return <HomeLayout />;
  } else if (pathname === "/d2ga/END") {
    return <GeneralLayout>{children}</GeneralLayout>;
  } else if (pathname === "/404") {
    return <HomeLayout />;
  } else {
    return <D2gaLayout data={data} />;
  }
}
